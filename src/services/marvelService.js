class MarvelService {
  _apiBase = "https://gateway.marvel.com:443/v1/public/";
  _apiKey = "apikey=27d51cacf7bc8ea5606cd8f95f586c9b";

  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url},status ${res.status}`);
    }

    return await res.json();
  };

  getAllCharacters = async () => {
    const res = await this.getResource(
      `${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`
    );
    return res.data.results.map(this._transformCharacter);
  };
  getCharacter = async (id) => {
    const res = await this.getResource(
      `${this._apiBase}characters/${id}?${this._apiKey}`
    );
    return this._transformCharacter(res.data.results[0]);
  };
  // updateChar = () => {
  //   const id = Math.floor(Math.random() * (1011400 - 1011134) + 1011334);
  //   this.marvelService.getCharacter(id).then((res) => {
  //     this.setState({
  //       name: res.data.results[0].name,
  //       description: res.data.results[0].description,
  //       thumbnail:
  //         res.data.results[0].thumbnail.path +
  //         "." +
  //         res.data.results[0].thumbnail.extension,
  //       homepage: res.data.results[0].urls[0].url,
  //       wiki: res.data.results[0].urls[1].url,
  //     });
  //   });
  // };
  _transformCharacter = (char) => {
    return {
      name: char.name,
      description: char.description,
      thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
    };
  };
}
export default MarvelService;

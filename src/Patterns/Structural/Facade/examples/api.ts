type OptionParameters = {};

class API {
  constructor(public authToken: string) {}

  constructHeaders() {
    const headers = new Headers();
    headers.set("Authorization", this.authToken);
    return headers;
  }

  async handleResponse(response: Response) {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject({
        status: response.status,
        statusText: response.statusText,
      });
    }
  }

  async get(url: string, options: OptionParameters) {
    const response = await fetch(url, {
      headers: this.constructHeaders(),
      ...options,
    });

    return await this.handleResponse(response);
  }

  async post(url: string, options: OptionParameters) {
    const response = await fetch(url, {
      headers: this.constructHeaders(),
      method: "POST",
      ...options,
    });

    return await this.handleResponse(response);
  }

  async put(url: string, options: OptionParameters) {
    const response = await fetch(url, {
      headers: this.constructHeaders(),
      method: "PUT",
      ...options,
    });

    return await this.handleResponse(response);
  }

  async delete(url: string, options: OptionParameters) {
    const response = await fetch(url, {
      headers: this.constructHeaders(),
      method: "DELETE",
      ...options,
    });

    return await this.handleResponse(response);
  }
}

import axiosDefaultConfig from 'jobsitychallengeapp/src/config/axiosConfig';
import capitalizeFirstLetter from 'jobsitychallengeapp/src/utils/capitalize';

import Config from 'react-native-config';
const REACT_APP_API_URL = "https://api.tvmaze.com";

const buildFormData = (data,files) => {
  const form = new FormData();

  files.forEach((file) => {
    const fileData = {
      uri: file.uri,
      type: file.type,
      name: file.fileName,
    };

    form.append('Files', fileData);
  });

  Object.keys(data).forEach(prop => {
    const formValue = data[prop];

    // Allow: all not null, not undefined, not empty and '0' values.
    if (formValue !== null && formValue !== undefined && formValue !== '') {
      form.append(capitalizeFirstLetter(prop), formValue);
    }
  });
  return form;
};

const genericGet = (
  url,
  token,
  requestConfig = {},
) => {
  return new Promise((resolve, reject) => {
    const config = token ? withToken(token, requestConfig) : { ...requestConfig };
    return axiosDefaultConfig
      .get(REACT_APP_API_URL + '/' + url, config)
      .then(response => {
        if (response && response.data) {
          resolve(response.data);
        } else {
          reject();
        }
      })
      .catch(error => {
        if (error.response?.data) {
          reject(error.response.data);
        }

        reject(error);
      });
  });
};

const genericPost = (
  url,
  token,
  data,
  requestConfig = {},
) => {
  return new Promise((resolve, reject) => {
    const config = token ? withToken(token, requestConfig) : { ...requestConfig };
    return axiosDefaultConfig
      .post(REACT_APP_API_URL + '/' + url, data, config)
      .then(response => {
        if (response && response.data) {
          resolve(response.data);
        }
        resolve({});
      })
      .catch(error => {
        if (error.response?.data) {
          reject(error.response.data);
        }

        reject(error);
      });
  });
};

const genericPut = (
  url,
  token,
  data,
  requestConfig = {},
)=> {
  return new Promise((resolve, reject) => {
    const config = token ? withToken(token, requestConfig) : { ...requestConfig };
    return axiosDefaultConfig
      .put(REACT_APP_API_URL + '/' + url, data, config)
      .then(response => {
        if (response && response.data) {
          resolve(response.data);
        }
        resolve({});
      })
      .catch(error => {
        reject(error.response.data);
      });
  });
};

const genericDelete = (
  url,
  token,
  requestConfig = {},
) => {
  return new Promise((resolve, reject) => {
    const config = token ? withToken(token, requestConfig) : { ...requestConfig };
    return axiosDefaultConfig
      .delete(REACT_APP_API_URL + '/' + url, config)
      .then((response) => {
        if (response && response.data) {
          resolve(response.data);
        }
        resolve({});
      })
      .catch(error => {
        reject(error.response.data);
      });
  });
};

const withToken = (
  token,
  requestConfig = {},
) => {
  if (!token) {
    return requestConfig;
  }

  const result = { ...requestConfig };
  result.headers = { ...result.headers, authorization: `Bearer ${token}` };
  return result;
};

export { buildFormData, genericGet, genericPost, genericPut, genericDelete };

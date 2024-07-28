let api_base_url = '';

export function setBaseUrl(baseUrl) {
    console.log(`Setting base URL to: ${baseUrl}`);
    api_base_url = baseUrl;
}

export async function getData(endpoint, customConfig = {}) {
  const config = {
    method: 'GET',
    ...customConfig,
  }

  return doFetch(endpoint, config);
}

export async function postData(endpoint, body, customConfig = {}) {
  const config = {
    method: 'POST',
    body: JSON.stringify(body),
    ...customConfig,
    headers: {
      'Content-Type': 'application/json',
      ...customConfig.headers,
    },
  }
  return doFetch(endpoint, config);
}

export async function updateData(endpoint, body, customConfig = {}) {
  const config = {
    method: 'PUT',
    body: JSON.stringify(body),
    ...customConfig,
    headers: {
      'Content-Type': 'application/json',
      ...customConfig.headers,
    },
  }
  return doFetch(endpoint, config);
}

export async function deleteData(endpoint, customConfig = {}) {
  const config = {
    method: 'DELETE',
    ...customConfig,
  }

  return doFetch(endpoint, config);
}

async function doFetch(endpoint, config) {
  let response = await window.fetch(`${api_base_url}/${endpoint}`, config);
  if (response.ok) {
    return await response.json();
  } else {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
}
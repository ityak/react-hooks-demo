import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, dependencies) => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then(res => {
        setLoading(false);
        setResponse(res);
      })
      .catch(err => {
        setLoading(false);
        setError(err);
      });
  }, dependencies);

  return [isLoading, response, error];
};

export default useFetch;

import React, { useEffect, useState } from 'react';
import { SiteClient } from 'datocms-client';
import PropTypes from 'prop-types';

import connectToDatoCms from './connectToDatoCms';
import './style.sass';

const Main = ({ datoCmsApiToken, developmentMode, fieldValue }) => {
  const [url, setUrl] = useState();

  useEffect(() => {
    if (fieldValue && fieldValue.upload_id) {
      const client = new SiteClient(datoCmsApiToken, {
        environment: developmentMode,
      });

      client.uploads.find(fieldValue.upload_id)
        .then((upload) => {
          setUrl(upload.url);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setUrl();
    }
  }, [fieldValue]);

  if (!url) return null;

  return (
    <a href={url} className="button" target="_blank" rel="noreferrer">Download</a>
  );
};

const Wrap = connectToDatoCms(plugin => ({
  datoCmsApiToken: plugin.parameters.global.datoCmsApiToken,
  developmentMode: plugin.parameters.global.developmentMode,
  fieldValue: plugin.getFieldValue(plugin.fieldPath),
}))(Main);

Main.propTypes = {
  datoCmsApiToken: PropTypes.string.isRequired,
  developmentMode: PropTypes.string,
  fieldValue: PropTypes.object,
};

export default Wrap;

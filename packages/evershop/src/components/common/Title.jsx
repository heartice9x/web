import PropTypes from 'prop-types';
import React from 'react';

export default function Title({ title }) {
  return <title> Kính mắt Thanh Xoài </title>;
}

Title.propTypes = {
  title: PropTypes.string.isRequired
};

import React from "react";
import Loader from "react-loader-spinner";


class LoadingSpinner extends React.Component {

  render() {

    return (
      <Loader
        type="Bars"
        color="#20232a"
        height={75}
        width={75}
        style={{textAlign: 'center', marginTop: '3em'}}
        timeout={3000} //3 secs
      />
    );
  }
}

export default LoadingSpinner;
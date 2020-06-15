// import React, { Component } from 'react'

// export default class API extends Component {

//   state = {
//     loading: true,
//     image: null,
//   }

//   async componentDidMount() {
//     const url = "jceMwsZj2DhCmFS8pwlkdkEpXnQjFyvDHDPvNUY-4RA";
//     const APIKEY = "-Z4_zPrBTHIfOGW5kCOfZKs67aITV_CSDnmkEAdbtNU";
//     const response = await fetch(url);
//     const data = await response.json();
//     this.setState({ image: data.results[0], loading: false });
    
//   }


//   render() {
//     return (
//       <div>
//         {this.state.loading || !this.state.image ? (
//           <div>loading...</div>
//         ) : ( 
//           <div>
//             <div>{this.state.id}</div>
//             <img src={this.state.image}/>
//           </div>
//         )}
//       </div>
//     );
//   }
// }











import axios from "axios";
import React from "react"


const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "&apikey=trilogy";

componentDidMount() {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(json => {
    this.setState({
      isLoaded: true,
      items: json,
    })
  });
}


export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};

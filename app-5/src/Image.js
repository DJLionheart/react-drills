import React, { Component } from 'react';


function Image(props) {
    return (
        <div>
            <img src={props.spelunky} alt={props.desc} width={props.width}/>
        </div>
    )
}
// class Image extends Component {
//     render() {
//         return (
//             <div>
//                 <img src={this.props.spelunky} alt="Spelunky Box Art" width="1000px"/>
//             </div>
//         )
//     }
// }

export default Image; 

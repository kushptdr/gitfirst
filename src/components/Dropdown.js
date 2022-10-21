import React, {useState} from 'react';
import Select from 'react-select';
import { useForm } from 'react-hook-form';


const options = [
  { value: 'a', label: 'a' },
  { value: 'b', label: 'b' },
];

const FormComponent = (props) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const {
    handleSubmit
  } = useForm();

  const handleChange = (options) => {
    setSelectedOptions(options);
  };

  // const onSubmit = (formData, event) => {
  //    console.log("Form Data: ", formData)
  //    console.log("Selected Options: ", selectedOptions[1].value)
  // }
  const user= JSON.parse(localStorage.getItem("drop"))
  const onSubmit=(e)=> {

        let detail = [];
      
        if (localStorage.getItem("drop")) {
            detail = JSON.parse(localStorage.getItem("drop"))
        }
        let obj = {id:new Date().getTime().toString(),selectedOptions };
        detail.push(obj);
        localStorage.setItem("drop", JSON.stringify(detail));

        console.log("Saved in Local Storage");
}
  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Select
          isMulti = {true}
          options={options}
          name="selectedOptions"
          closeMenuOnSelect={false}
          onChange={handleChange}
          value={selectedOptions}/>
        

     <button type="submit">Save</button>
    </form>
    
    </div>
  );
}
export default FormComponent
// import React, { Component } from 'react';
// import Select from 'react-select';

// const options = [
//   { value: 'a', label: 'a' },
//   { value: 'b', label: 'b' },
// ];

// class App extends Component {
//   state = {
//     selectedOption: "",
//   }
//   handleChange = (selectedOption) => {
//     this.setState({ selectedOption });
//     // document.write(`Option selected:`, selectedOption.value); //this prints the selected option
//     console.log(selectedOption.value)
//   }
  
 


//   render() {
//     const { selectedOption } = this.state;

//     return (
//       <Select
//         value={selectedOption}
//         onChange={this.handleChange}
//         options={options}
//         isMulti //added when the user can pick more than one
//       />
//     );
//   }
// }
// import React, { Component } from 'react';

// import Select from 'react-select';

// const options = [
//   { value: 'a', label: 'a' },
//   { value: 'b', label: 'b' },
// ];

// class App extends Component {
//   state = {
//     selectedOptions: [],
//   }

//   handleChange = (selectedOptions) => {
//     this.setState({ selectedOptions });
//     console.log(selectedOptions)
//   }

//   render() {
//     const { selectedOptions } = this.state;

//     return (
//       <React.Fragment>
//         <Select
//           isMulti
//           value={this.state.selectedOption}
//           onChange={this.handleChange}
//           options={options}
//         />
//       {selectedOptions.map(o => <p>{o.value}</p>)}
//       </React.Fragment>
//     );
//   }
// }

// export default App

// // import React, { Component } from 'react';

// class Frameworks extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       options: ["React"],
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     let value = Array.from(
//       event.target.selectedOptions,
//       (option) => option.value
//     );
//     this.setState({
//       options: value,
//     });
//   }

//   handleSubmit(event) {
//     let alertTexts = "";
//     for (var i = 0; i < this.state.options.length; i++) {
//       alertTexts += this.state.options[i] + ", ";
//     }
//     alertTexts = alertTexts.slice(0, -2); //remove the trailing space and comma
//     alert("You selected " + alertTexts);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <div>
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Which library/framework do you work in? :
//           <select
//             multiple={true}
//             value={this.state.options}
//             onChange={this.handleChange}
//           >
//             <option value="React">React</option>
//             <option value="Angular">Angular</option>
//             <option value="Vue">Vue</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//       </div>
//     );
//   }
// }
// export default Frameworks
// import React, { useState } from "react";
// import "../App.css";
// import Select from "react-select";

// export default function Dropdown() {
//   // React state to manage selected options
//   const [selectedOptions, setSelectedOptions] = useState();

//   // Array of all options
//   const optionList = [
//     { value: "10th", label: "Red" },
//     { value: "green", label: "Green" },
//     { value: "yellow", label: "Yellow" },
//     { value: "blue", label: "Blue" },
//     { value: "white", label: "White" }
//   ];

//   // Function triggered on selection
//   function handleSelect(data) {
//     setSelectedOptions(data);
//   }
//   return (
//     <div className="app">
//       <h2>Choose your color</h2>
//       <div className="dropdown-container">
//         <Select
//           options={optionList}
//           placeholder="Select color"
//           value={selectedOptions}
//           onChange={handleSelect}
//           isSearchable={true}
//           isMulti
//         />
//       </div>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import Select from "react-select";
// import makeAnimated from "react-select/animated";
// import "../App.css";



// const options = [
//   { value: "produto 01", label: "Produto 01" },
//   { value: "produto 02", label: "Produto 02" },
//   { value: "produto 03", label: "Produto 03" },
//   { value: "produto 04", label: "Produto 04" },
//   { value: "produto 05", label: "Produto 05" },
//   { value: "produto 06", label: "Produto 06" },
//   { value: "produto 07", label: "Produto 07" },
//   { value: "produto 08", label: "Produto 08" },
// ];

//  const MultiSelect = () => {

//   return (
//     <>
//       <Select

        
//         isMulti
//         options={options}
//         isClearable={true}
//         isSearchable={true}
//         isDisabled={false}
//         isLoading={false}
//         isRtl={false}
//         closeMenuOnSelect={false}
        
//       />

//     </>
//   );
// };
// export default MultiSelect
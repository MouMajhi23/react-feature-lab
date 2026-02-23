import { useState } from "react";

const ReadMoreLess = () => {
  const [readMore, setReadMore] = useState(false);
  const buttonStyle = {
    border:"2px solid #8DA2C2",
    ["background-color"]:"#4B97F2",
    padding:"5px",
    ["border-radius"]:"10px",
    cursor:"pointer",
    color:"white"
  }
  const handleClick = ()=>{
    setReadMore((prev)=> !prev)
  }
  const buttonText = readMore ? "Read Less" : "Read More"
  return (
    <div style={{"display":"flex","alignItems":"center","justifyContent":"center","flexDirection":"column"}}>
      <h2 style={{"borderBottom":"1px solid black"}}>Read More or Less Example using useState Hook</h2>
      <div style={{"width":"80vw"}}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo officia
          modi ut mollitia? Modi, nemo neque nisi dolores rerum consequatur id?
          Aspernatur expedita, laborum commodi sint aliquid eius. Pariatur
          ipsam, molestiae quaerat eum cumque nisi, corporis porro rerum
          assumenda maxime velit. Maiores nemo ex explicabo dicta omnis nesciunt
          quibusdam officiis qui sint aliquid aspernatur fuga in accusamus,
          reiciendis temporibus ratione dolore, facilis deserunt ipsa
          necessitatibus, vitae autem quasi dolores!<span style={{ display: readMore ? "block" : "none" }}>In, doloribus reiciendis!
          Nesciunt itaque quam unde, numquam qui, accusamus sed quis fuga minus
          debitis libero molestiae adipisci. Nemo inventore quo pariatur quam
          modi vero eos unde aperiam, non, id sunt dolorum iste quis delectus,
          blanditiis ad qui. Amet soluta officiis sapiente recusandae
          perspiciatis, explicabo aspernatur voluptatum consectetur, excepturi
          ea porro illo repudiandae, deserunt fuga quos tempora incidunt
          adipisci commodi fugit corporis libero reprehenderit eum accusamus
          cupiditate. Culpa explicabo, dolor, aperiam cupiditate ea nihil
          numquam maiores accusantium tenetur commodi consequuntur vel hic
          dolorum debitis totam aspernatur sapiente corporis. Quos est quam
          provident quibusdam labore eligendi dolore in excepturi, consequuntur
          quisquam porro cumque facilis numquam dolorem illum corporis nisi
          doloribus quia! Esse itaque maiores aepe incidunt sit omnis voluptatum
          a vero aliquid soluta eveniet natus officia. Ipsam praesentium
          assumenda necessitatibus eligendi voluptates.
          </span>
        </p>
         <button style={buttonStyle} onClick={handleClick}>{buttonText}</button>
      </div>
    </div>
  );
};

export default ReadMoreLess;

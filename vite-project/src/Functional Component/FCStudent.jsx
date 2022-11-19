
export default function FCStudant(props) {

  let WBonus= props.grade+5;
// props.grade=200;///eror read only!!
function btnAddOne(){
  WBonus++;
  console.log(WBonus);
}

function cbhTxt(e){
  console.log(e.target.value);

}

if (75<props.grade) {
  
  return (
    <div>
      Studant <br />
      id={props.id}<br />
      name={props.name} <br />
      grade={props.grade} <br />
      WBonus={WBonus} <br />
      <button onClick={btnAddOne}>Add One </button>
      <input type="text" onChange={cbhTxt} />
    </div>

  );
}
else{
return(
  <div>
    not over 75
  </div>
);

}
  

}

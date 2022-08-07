import "./card-list.style.css";
import Card from "../Card/Card";
const  CardList =(props)=> {
    const { monsters } = props;
    return (
      <div className="card-list">
        {monsters.map((monster,i) => {
          return (
            <Card monster ={monster} key={i}/>
          );
        })}
      </div>
    );
  }

export default CardList;

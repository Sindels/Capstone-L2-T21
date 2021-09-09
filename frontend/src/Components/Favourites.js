import React from "react";
import { Table } from "react-bootstrap"; //import the table style from bootstrap and import react
import '../favourite.css'; //import the style sheet for the favourites page

const Favourites = (props) => {
   const { favouriteList } = props;

  return (
    <div >
      <h3 className="favHeading" >Favourites</h3>
      <Table>
        <tbody>
          <tr>
            {favouriteList.map(item => { //map through the data that has been saved in the favourite list
              return (
                <div>
                  <a key={item.id} href={item.link}>
                    <td>
                       <img className="favImage" src={item.img} alt={item.trackName}/> {/*display the image of the item that has been saved to the favourite list */}
                    </td>
                    <td className="favTitle">{item.title}</td> {/*display the title of the item that has been saved to the favourite list */}
                  </a>
                </div>
              );
            })}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Favourites; //export the favourite component
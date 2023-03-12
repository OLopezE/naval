import furniture from "../furnitureJSON/furniture";

import BrightLogo from "./images";

console.log(BrightLogo)
class FurnitureAPI {
  constructor() {
    this._furnitureDB = furniture;
  }

  getFurniturePiecesImgAndID = () =>{
    const furniturePieces = this._furnitureDB;
    let furniturePiecesImgAndId = furniturePieces.map(
      furniturePiece => (
        { 
          id: furniturePiece.id,
          BrightLogo
        }
      )
    );

    return furniturePiecesImgAndId;
  }

  getFurniturePiece = id => {
    const furniturePieces = this._furnitureDB;
    console.log(furniturePieces[0].id, id)
    let result = furniturePieces.filter(
      furniturePiece => furniturePiece.id === id
    )

    console.log(result);
    
    return result[0];

  }



}

export default FurnitureAPI;

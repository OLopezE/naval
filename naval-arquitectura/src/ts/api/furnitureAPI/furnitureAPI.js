import furniture from "../furnitureJSON/furniture";
import images from './images';

class FurnitureAPI {
  constructor() {
    this._furnitureDB = furniture;
  }

  getFurniturePiecesImgAndID = () =>{
    const furniturePieces = this._furnitureDB;
    let furniturePiecesImgAndId = furniturePieces.map(
      furniturePiece => (
        { 
          id: furniturePiece.id
        }
      )
    );

    return furniturePiecesImgAndId;
  }

  getFurniturePiece = id => {
    const furniturePieces = this._furnitureDB;
    let result = furniturePieces.filter(
      furniturePiece => furniturePiece.id === id
    )
    
    return result[0];

  }



}

export default FurnitureAPI;

import furniture from "../furnitureJSON/furniture";

class FurnitureAPI {
  constructor() {
    this._furnitureDB = furniture;
  }

  getFurniturePiecesImgAndID = () =>{
    const furniturePieces = this._furnitureDB;
    let furniturePiecesImgAndId = furniturePieces.map(
      furniturePiece => (
        { 
          image: furniturePiece.image[0],
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

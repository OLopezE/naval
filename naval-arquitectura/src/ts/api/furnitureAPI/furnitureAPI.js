import furniture from "../furnitureJSON/furniture";
import images from "./images";
import placeholderImage from '/media/images/01.jpg'
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
          image: images[furniturePiece.id] ?? placeholderImage
        }
      )
    );

    return furniturePiecesImgAndId;
  }

  getFurniturePiece = id => {
    const furniturePieces = this._furnitureDB;

    let result = furniturePieces.find(furniturePiece => furniturePiece.id === id);
  
    result.image = images[result.id];
    return result;
  }
}

export default FurnitureAPI;

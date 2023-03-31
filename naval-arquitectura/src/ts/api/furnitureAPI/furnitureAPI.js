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
      furniturePiece => {
        let image = this._getImages(furniturePiece.id);

        image = image ? image[0] : placeholderImage;

        return ( {
          id: furniturePiece.id,
          image
        }
      )
      }
    );

    return furniturePiecesImgAndId;
  }

  getFurniturePiece = id => {
    const furniturePieces = this._furnitureDB;

    let result = furniturePieces.find(furniturePiece => furniturePiece.id === id);
  
    result.images = this._getImages(result.id);
    return result;
  }

  _getImages(id) {
    const item = images.find(image => image.id === id);

    return item?.images ?? undefined;
  }
}

export default FurnitureAPI;

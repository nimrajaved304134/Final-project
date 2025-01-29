export interface product {
  _id : string;
  name : string;
  _type : "product";
  image? : {
      _ref : string;
      _type : "image";
  }
  price : number;
  description? : string;
}

export interface productdetail {
  _id: string;
  name: string;
  _type: "product";
  image?: {
    _ref: string;
    _type: "image";
  };
  price: number;
  description?: string;
  dimensions?: {
    height: string;
    width: string;
    depth: string;
  };
  slug: {
    current: string;
  };
}
export interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  thumbnail: string;
  rating: {
    rate: number;
    count: number;
  };
}
export interface DjummyProductsType {
  products: [DjummyProductType];
  total: number;
  skip: number;
  limit: number;
}

export interface DjummyProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  stock: number;
  category: string;
  brand: string;
  images: [];
  rating: number;
}

export interface UsersType {
  id: number;
  email: string;
  username: string;
  password: string;
  name: { lastname: string; firstname: string };
  address: {
    geolocation: {
      lat: string;
      long: string;
    };
    city: string;
    number: number;
    zipcode: string;
  };
  __v: number;
}

export interface AlbumsType {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface IEnvironment{
    production: boolean;
    environment: string;
    useMock:boolean;
    mongodb:string;
    port: number;
    token: string;
    pushNotification:{
      public:string;
      private:string
    };
}

const development: IEnvironment = {
  production: false,
  environment: "development",
  useMock: true,
  mongodb: "mongodb+srv://your-user:<password>@cluster.rhp27.mongodb.net/<dbname>?retryWrites=true&w=majority",
  port: 8181,
  token: "sRg*94jRF@aBO9*",
  pushNotification: {
    public: "BAAyvVdxB9Nqaly1i73XGl4G-gl4oMfJ6uirFIV6Fq4qaroKimB6bHY_Z8Oo_eUKbxo0loFBNS5FqdaJ0Xvq_6Y",
    private: "-fVdYjdkDpP8_Ffwkyy0gRXgJUosBje00O3Rh9C5STg"
  }
};

const production: IEnvironment = {
  production: true,
  environment: "production",
  useMock: true,
  mongodb: "mongodb+srv://your-user:<password>@cluster.rhp27.mongodb.net/<dbname>?retryWrites=true&w=majority",
  port: 8181,
  token: "sRg*94jRF@aBO9*",
  pushNotification: {
    public: "BAAyvVdxB9Nqaly1i73XGl4G-gl4oMfJ6uirFIV6Fq4qaroKimB6bHY_Z8Oo_eUKbxo0loFBNS5FqdaJ0Xvq_6Y",
    private: "-fVdYjdkDpP8_Ffwkyy0gRXgJUosBje00O3Rh9C5STg"
  }
};

export default process.env.production ? production : development;

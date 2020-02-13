new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data: () => ({
    valid: true,

    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 50) || "Name must be less than 10 characters"
    ],

    refacciones: [
      {
        nombreRefaccion: "Motor",
        numeroSerie: "123",
        modeloVehiculo: "jk45",
        Stock: "2",
        Proveedor: "Autopartes Sur",
        Compra: "30",
        Venta: "50"
      }
    ],
    nombreRefaccion: "",
    numeroSerie: "",
    modeloVehiculo: "",
    Stock: "",
    Proveedor: "",
    Compra: "",
    Venta: "",

    dense: false,
    fixedHeader: false,
    height: 300
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },

    agregarProducto: function() {
      console.log("Agregar Productos");
      if (
        this.nombreRefaccion != "" &&
        this.numeroSerie != "" &&
        this.modeloVehiculo != "" &&
        this.Stock != "" &&
        this.Proveedor != "" &&
        this.Compra != "" &&
        this.Venta != ""
      ) {
        this.refacciones.push({
          nombreRefaccion: this.nombreRefaccion,
          numeroSerie: this.numeroSerie,
          modeloVehiculo: this.modeloVehiculo,
          Stock: this.Stock,
          Proveedor: this.Proveedor,
          Compra: this.Compra,
          Venta: this.Venta
        });
        console.log(this.refacciones);

        (this.nombreRefaccion = ""),
          (this.numeroSerie = ""),
          (this.modeloVehiculo = ""),
          (this.Stock = ""),
          (this.Proveedor = ""),
          (this.Compra = ""),
          (this.Venta = "");
      } else {
        alert("Rellene los campos pendientes");
      }
    },

    eliminarIndice: function(index) {
      this.refacciones.splice(index, 1);
    }
  }
});

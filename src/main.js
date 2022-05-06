const obterHoteis = require('./data/hotels');
const formatarData = ('./utils/dataUtils');


function getCheapestHotel (input) { //DO NOT change the function's name.
      
     const hotel = obterHoteis

    const hotelMaisBarato = input => {
        const partesReserva = input.split(":");
        const tipoDoCliente = partesReserva[0];
        const diasEstadiaFormatados = partesReserva[1]
            .split(",")
            .map(data => formatarData(data));
    
        return hotelMaisBarato(tipoDoCliente, diasEstadiaFormatados);
    }
    



    
    return "Cheapest hotel name"
}

exports.getCheapestHotel = getCheapestHotel

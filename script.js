// Selectores
const contenedorallcomponentes = document.getElementById('all-componentes')
const contenedorcomponentes = document.getElementById('componentes')
const contenedorProcesadores = document.getElementById('procesadores')
const contenedorMemoriaRam = document.getElementById('ram')
const contenedorVideo = document.getElementById('video')
const contenedorDisco = document.getElementById('disco')
const contenedorFuente = document.getElementById('fuente')
const contenedorGabinete = document.getElementById('gabinete')
const contenedorMonitor = document.getElementById('monitor')
const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonMother = document.getElementsByClassName('botonMother')
const botonProcesador = document.getElementsByClassName('botonProcesador')
const botonRam = document.getElementsByClassName('botonRAM')
const botonVideo = document.getElementsByClassName('botonVideo')
const botonDiscoDuro = document.getElementsByClassName('botonDiscoDuro')
const botonFuente = document.getElementsByClassName('botonFuente')
const botonGabinete = document.getElementsByClassName('botonGabinete')
const botonMonitor = document.getElementsByClassName('botonGabinete')
const preciototal = document.getElementsByClassName('preciototal')
const carritofinal = document.getElementById('carrito-final')
const carrito = []

// Productos
const arrayProductos = [
    {
        id: 1,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_15566_Mother_ASUS_PRIME_A320M-K_Ryzen_2da_Gen_Ready_M-ATX_9f5c58de-grn.jpg',
        nombre: 'ASUS PRIME A320M-K',
        precio: 7280,
    },
    {
        id: 2,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_12738_Mother_Asrock_A320M-HDV_R4.03_Ryzen_M-ATX_bfcdd1cc-grn.jpg',
        nombre: 'Asrock A320M-HDV R4.03 Ryzen M-ATX',
        precio: 5970,
    },
    {
        id: 3,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_14179_Mother_Gigabyte_AB350M_V2.0_DS3H_AM4_a4060e9c-grn.jpg',
        nombre: 'Gigabyte AB350M V2.0 DS3H AM4',
        precio: 7430,
    },
    {
        id: 4,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_11321_Mother_Gigabyte_GA-A320M-S2H_Ryzen_2da_Gen_Ready_M-ATX_02ca7106-grn.jpg',
        nombre: 'Gigabyte GA-A320M-S2H Ryzen 2da Gen Ready M-ATX',
        precio: 7830,
    },
    {
        id: 5,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_6924_Mother_Asrock_H310CM-HDV_Socket_1151_8va_Gen_150c72bc-grn.jpg',
        nombre: 'Asrock H310CM-HDV Socket 1151 8va Gen',
        precio: 6390,
    },
    {
        id: 6,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_7710_Mother_Gigabyte_H310M-DS2_LGA_1151_8va_gen__19bc28fc-grn.jpg',
        nombre: 'Gigabyte H310M-DS2 LGA 1151 8va gen',
        precio: 7260,
    },
    {
        id: 7,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_7715_Mother_Gigabyte_H310M-H_LGA_1151_8va_gen__bdf6e65f-grn.jpg',
        nombre: 'Gigabyte H310M-H LGA 1151 8va gen',
        precio: 7210,
    },
    {
        id: 8,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_9050_Mother_MSI_B360M_Mortar_1151_8va_Gen__628375eb-grn.jpg',
        nombre: 'ASUS PRIME A320M-K',
        precio: 7280,
    },
    {
        id: 9,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_15566_Mother_ASUS_PRIME_A320M-K_Ryzen_2da_Gen_Ready_M-ATX_9f5c58de-grn.jpg',
        nombre: 'MSI B360M Mortar 1151 8va Gen',
        precio: 13760,
    },
    {
        id: 10,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_16200_Procesador_Intel_Core_i7_9700F_4.7GHz_Turbo_1151_Coffee_Lake_40da7c9b-med.jpg',
        nombre: 'Intel Core i7 9700F Turbo 1151 Coffee Lake',
        precio: 7280,
    },
    {
        id: 11,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_10737_Procesador_Intel_Core_i5_9600K_4.6GHz_Turbo_1151_9th_Gen_Coffee_Lake__27076104-med.jpg',
        nombre: 'Asrock A320M-HDV R4.03 Ryzen M-ATX',
        precio: 5970,
    },
    {
        id: 12,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_13664_Procesador_Intel_Core_i5_9400_4.1GHz_Turbo_1151_9th_Gen_fd1d0512-med.jpg',
        nombre: 'Gigabyte AB350M V2.0 DS3H AM4',
        precio: 7430,
    },
    {
        id: 13,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_15412_Procesador_Intel_Core_i7_9700_4.7GHz_Turbo_1151_Coffee_Lake_1dbaedd8-med.jpg',
        nombre: 'Gigabyte GA-A320M-S2H Ryzen 2da Gen Ready M-ATX',
        precio: 7830,
    },
    {
        id: 14,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_16159_Procesador_Intel_Core_i3_9100_4.2GHz_Turbo_1151_9th_Gen_5036a1e9-med.jpg',
        nombre: 'Asrock H310CM-HDV Socket 1151 8va Gen',
        precio: 6390,
    },
    {
        id: 15,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_6057_Procesador_AMD_A12_9800E_3.8Ghz_APU_AM4___Radeon_R7_a9c66dcc-med.jpg',
        nombre: 'Gigabyte H310M-DS2 LGA 1151 8va gen',
        precio: 7260,
    },
    {
        id: 16,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_19123_Procesador_AMD_RYZEN_9_3950X_4.7GHz_Turbo_AM4_ecf0fd32-med.jpg',
        nombre: 'Gigabyte H310M-H LGA 1151 8va gen',
        precio: 7210,
    },
    {
        id: 17,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_12728_Procesador_AMD_A6_7480_3.5GHz_FM2__Dual_Core_65W__a0d46ee3-med.jpg',
        nombre: 'AMD A6 7480 3.5GHz FM2+ Dual Core 65W',
        precio: 5310,
    },
    {
        id: 18,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_16481_Procesador_AMD_Athlon_3000G_3.5GHz___Radeon_Vega_3_AM4_8a762b5b-med.jpg',
        nombre: 'AMD Athlon 3000G 3.5GHz + Radeon Vega 3 AM4',
        precio: 18500,
    },
    {
        id: 19,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_17898_Procesador_AMD_Ryzen_5_1600_AF_Zen__12nm_AM4_Wraith_Stealth_Cooler_187bb9ab-med.jpg',
        nombre: 'AMD Ryzen 5 1600 AF Zen+ 12nm AM4 Wraith Stealth Cooler',
        precio: 20500,
    },
    {
        id: 20,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_20003_Procesador_AMD_RYZEN_7_3800XT_4.7GHz_Turbo_19451dfa-med.jpg',
        nombre: 'AMD RYZEN 7 3800XT 4.7GHz Turbo',
        precio: 51860,
    },
    {
        id: 21,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_20814_Procesador_AMD_Ryzen_5_3500X_4.1GHz_Turbo____Wraith_Stealth_Cooler_472ea236-med.jpg',
        nombre: 'AMD Ryzen 5 3500X 4.1GHz Turbo + Wraith Stealth Cooler',
        precio: 28900,
    },
    {
        id: 22,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22254_Procesador_AMD_Ryzen_5_5600X_4.6GHz_Turbo_AM4___Wraith_Stealth_Cooler_f737ec9f-med.jpg',
        nombre: 'AMD Ryzen 5 5600X 4.6GHz Turbo AM4 + Wraith Stealth Cooler',
        precio: 40300,
    },
    {
        id: 23,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_3340_Memoria_Corsair_DDR4_4GB_2400MHz_Vengeance_LPX_BLACK__d398e5e0-med.jpg',
        nombre: 'Memoria RAM Corsair DDR4 4GB 2400MHz Vengeance LPX BLACK',
        precio: 3642,
    },
    {
        id: 24,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_4881_Memoria_Corsair_DDR4_4GB_2666Mhz_Value__6d22ee2c-med.jpg',
        nombre: 'Memoria RAM Corsair DDR4 4GB 2666Mhz Value',
        precio: 3697,
    },
    {
        id: 25,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22028_Memoria_OLOy_DDR4_8GB_Owl_Black_2666MHz_CL19_8f1ca0b9-med.jpg',
        nombre: 'Memoria RAM OLOy DDR4 8GB Owl Black 2666MHz CL19',
        precio: 4150,
    },
    {
        id: 26,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25983_Memoria_GeiL_DDR4_8GB_3000MHz_EVO_X_II_RGB_2a5d75c9-med.jpg',
        nombre: 'Memoria RAM GeiL DDR4 8GB 3000MHz EVO X II RGB',
        precio: 5210,
    },
    {
        id: 27,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_6924_Mother_Asrock_H310CM-HDV_Socket_1151_8va_Gen_150c72bc-grn.jpg',
        nombre: 'Memoria RAM Team DDR4 32GB (2x16GB) 3200MHz T-Create',
        precio: 20315,
    },
    {
        id: 28,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_8821_Placa_de_Video_GeForce_MSI_GT_1030_2GB_GDDR4_OC_LP_c8126a3a-med.jpg',
        nombre: 'GeForce MSI GT 1030 2GB GDDR4 OC LP',
        precio: 27500,
    },
    {
        id: 29,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_12198_Placa_de_Video_MSI_GeForce_GTX_1660_Ti_6GB_GDDR6_Ventus_XS_OC_7d3c8fd2-med.jpg',
        nombre: 'MSI GeForce GTX 1660 Ti 6GB GDDR6 Ventus XS OC',
        precio: 120000,
    },
    {
        id: 30,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_27758_Placa_de_Video_Zotac_GeForce_RTX_3070_8GB_GDDR6_Twin_Edge_OC_29e2d107-med.jpg',
        nombre: 'Zotac GeForce RTX 3070 8GB GDDR6 Twin Edge OC',
        precio: 325000,
    },
    {
        id: 31,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_12950_Placa_de_Video_Asrock_Radeon_RX_570_4GB_Phantom_Gaming_D_46f58934-med.jpg',
        nombre: 'Asrock Radeon RX 570 4GB Phantom Gaming D',
        precio: 60070,
    },
    {
        id: 32,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_3168_Placa_de_Video_XFX_RX_580_8GB_XXX_OC_RX-580P8DFD6_4414f12e-med.jpg',
        nombre: 'XFX RX 580 8GB XXX OC RX-580P8DFD6',
        precio: 155000,
    },
    {
        id: 33,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25578_Placa_de_Video_MSI_Radeon_RX_6700_XT_12GB_GDDR6_GAMING_X_42d7f750-med.jpg',
        nombre: 'MSI Radeon RX 6700 XT 12GB GDDR6 GAMING X',
        precio: 210000,
    },
    {
        id: 34,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_9018_Disco_R__gido_WD_1TB_BLUE_64MB_SATA_6.0GB_s__ca74d162-med.jpg',
        nombre: 'Disco Rígido WD 1TB BLUE 64MB SATA 6.0GB/s',
        precio: 5120,
    },
    {
        id: 35,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_28439_Disco_R__gido_Seagate_1TB_Barracuda_64MB_SATA_6GB_s_86dd0248-med.jpg',
        nombre: 'Disco Rígido Seagate 1TB Barracuda 64MB SATA 6GB/s',
        precio: 4940,
    },
    {
        id: 36,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25929_Disco_R__gido_WD_3TB_PURPLE_64MB_SATA_6.0GB_s_ab6fe82a-med.jpg',
        nombre: 'Disco Rígido WD 3TB PURPLE 64MB SATA 6.0GB/s',
        precio: 9620,
    },
    {
        id: 37,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_26157_Disco_Rigido_Seagate_4TB_Skyhawk_256MB_5.4K_RPM_6d02d7b9-med.jpg',
        nombre: 'Disco Rigido Seagate 4TB Skyhawk 256MB 5.4K RPM',
        precio: 11690,
    },
    {
        id: 38,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_13306_Disco_S__lido_SSD_Crucial_480GB_BX500_3D_NAND_540MB_s_436cdfbd-med.jpg',
        nombre: 'Disco Sólido SSD Crucial 480GB BX500 3D NAND 540MB/s',
        precio: 6350,
    },
    {
        id: 39,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_18743_Disco_Solido_SSD_Team_256GB_GX2_530MB_s_7d116a15-med.jpg',
        nombre: 'Disco Solido SSD Team 256GB GX2 530MB/s',
        precio: 3940,
    },
    {
        id: 40,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_9102_Fuente_Thermaltake_Smart_600W_80_Plus_White_c7c77b93-med.jpg',
        nombre: 'Thermaltake Smart 600W 80 Plus White',
        precio: 7210,
    },
    {
        id: 41,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_10449_Fuente_Thermaltake_Smart_700W_80_Plus_White__534944da-med.jpg',
        nombre: 'Thermaltake Smart 700W 80 Plus White',
        precio: 9380,
    },
    {
        id: 42,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_20117_Fuente_Corsair_CV450_450W_80_Plus_Bronze_No_incluye_cable_de_poder_0adbe0de-med.jpg',
        nombre: 'Corsair CV450 450W 80 Plus Bronze',
        precio: 5855,
    },
    {
        id: 43,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_23305_Fuente_ASUS_TUF_650B_80_Plus_Bronze_650W_a7934d75-med.jpg',
        nombre: 'Fuente ASUS TUF 650B 80 Plus Bronze 650W',
        precio: 12210,
    },
    {
        id: 44,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22432_Fuente_ASUS_ROG_STRIX_750G_80_Plus_Gold_750W_Full_Modular_38c61d29-med.jpg',
        nombre: 'ASUS ROG STRIX 750G 80 Plus Gold 750W Full Modular',
        precio: 27970,
    },
    {
        id: 45,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_8182_Gabinete_Gamemax_H602_WB_White_M-ATX_FAN_1_x_120mm_bb3049ea-med.jpg',
        nombre: 'Gamemax H602 WB White M-ATX FAN 1 x 120mm',
        precio: 3999,
    },
    {
        id: 46,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_13554_Gabinete_Aerocool_Bolt_Black_RGB_Ventana_Acrilica_ATX_66b77f2a-med.jpg',
        nombre: 'Aerocool Bolt Black RGB Ventana Acrilica ATX',
        precio: 4890,
    },
    {
        id: 47,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_13638_Gabinete_Aerocool_Shard_Black_RGB_Vidrio_Templado_4_x_Fan_RGB_f47eb573-med.jpg',
        nombre: 'Aerocool Shard Black RGB Vidrio Templado 4 x Fan RGB',
        precio: 10080,
    },
    {
        id: 48,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_16045_Gabinete_Cooler_Master_C700P_Black_Edition_Vidrio_Templado_E-ATX_b575c289-med.jpg',
        nombre: 'Cooler Master C700P Black Edition Vidrio Templado E-ATX',
        precio: 49000,
    },
    {
        id: 49,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_18109_Gabinete_Deepcool_MACUBE310P_WH_05bd513f-med.jpg',
        nombre: 'Deepcool MACUBE310P WH',
        precio: 10310,
    },
    {
        id: 50,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_18104_Gabinete_Deepcool_MACUBE310_BK_ad1afab4-med.jpg',
        nombre: 'Deepcool MACUBE310 BK',
        precio: 7550,
    },
    {
        id: 51,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_9755_Monitor_Samsung_27___Curvo_LC27F390FHLX_b6fab1bd-med.jpg',
        nombre: "Samsung 27' Curvo LC27F390FHLX",
        precio: 34980,
    },
    {
        id: 52,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_5108_Monitor_Gamer_LG_25_Pulgadas_Ultrawide_IPS25UM58-P_b018ae56-med.jpg',
        nombre: 'LG 25 Pulgadas Ultrawide IPS25UM58-P',
        precio: 32280,
    },
    {
        id: 53,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_13283_Monitor_LG_24__IPS_75Hz_AMD_FreeSync_24MK430H-B_13e39792-med.jpg',
        nombre: "LG 24' IPS 75Hz AMD FreeSync 24MK430H-B",
        precio: 24730,
    },
    {
        id: 54,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_13394_Monitor_Gamer_Samsung_24__G50_Curvo_144Hz_Full_HD_f473d83a-med.jpg',
        nombre: "Samsung 24' G50 Curvo 144Hz Full HD",
        precio: 40500,
    },
]

const arrayMotherboards = [
    {
        id: 1,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_15566_Mother_ASUS_PRIME_A320M-K_Ryzen_2da_Gen_Ready_M-ATX_9f5c58de-grn.jpg',
        nombre: 'ASUS PRIME A320M-K',
        precio: 7280,
    },
    {
        id: 2,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_12738_Mother_Asrock_A320M-HDV_R4.03_Ryzen_M-ATX_bfcdd1cc-grn.jpg',
        nombre: 'Asrock A320M-HDV R4.03 Ryzen M-ATX',
        precio: 5970,
    },
    {
        id: 3,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_14179_Mother_Gigabyte_AB350M_V2.0_DS3H_AM4_a4060e9c-grn.jpg',
        nombre: 'Gigabyte AB350M V2.0 DS3H AM4',
        precio: 7430,
    },
    {
        id: 4,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_11321_Mother_Gigabyte_GA-A320M-S2H_Ryzen_2da_Gen_Ready_M-ATX_02ca7106-grn.jpg',
        nombre: 'Gigabyte GA-A320M-S2H Ryzen 2da Gen Ready M-ATX',
        precio: 7830,
    },
    {
        id: 5,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_6924_Mother_Asrock_H310CM-HDV_Socket_1151_8va_Gen_150c72bc-grn.jpg',
        nombre: 'Asrock H310CM-HDV Socket 1151 8va Gen',
        precio: 6390,
    },
    {
        id: 6,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_7710_Mother_Gigabyte_H310M-DS2_LGA_1151_8va_gen__19bc28fc-grn.jpg',
        nombre: 'Gigabyte H310M-DS2 LGA 1151 8va gen',
        precio: 7260,
    },
    {
        id: 7,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_7715_Mother_Gigabyte_H310M-H_LGA_1151_8va_gen__bdf6e65f-grn.jpg',
        nombre: 'Gigabyte H310M-H LGA 1151 8va gen',
        precio: 7210,
    },
    {
        id: 8,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_9050_Mother_MSI_B360M_Mortar_1151_8va_Gen__628375eb-grn.jpg',
        nombre: 'ASUS PRIME A320M-K',
        precio: 7280,
    },
    {
        id: 9,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_15566_Mother_ASUS_PRIME_A320M-K_Ryzen_2da_Gen_Ready_M-ATX_9f5c58de-grn.jpg',
        nombre: 'MSI B360M Mortar 1151 8va Gen',
        precio: 13760,
    },
]

const arrayProcesadores = [
    {
        id: 10,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_16200_Procesador_Intel_Core_i7_9700F_4.7GHz_Turbo_1151_Coffee_Lake_40da7c9b-med.jpg',
        nombre: 'Intel Core i7 9700F Turbo 1151 Coffee Lake',
        precio: 7280,
    },
    {
        id: 11,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_10737_Procesador_Intel_Core_i5_9600K_4.6GHz_Turbo_1151_9th_Gen_Coffee_Lake__27076104-med.jpg',
        nombre: 'Intel Core i5 9600K 4.6GHz Turbo 1151 9th Gen Coffee Lake',
        precio: 32010,
    },
    {
        id: 12,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_13664_Procesador_Intel_Core_i5_9400_4.1GHz_Turbo_1151_9th_Gen_fd1d0512-med.jpg',
        nombre: 'Intel Core i5 9400 4.1GHz Turbo 1151 9th Gen',
        precio: 33500,
    },
    {
        id: 13,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_15412_Procesador_Intel_Core_i7_9700_4.7GHz_Turbo_1151_Coffee_Lake_1dbaedd8-med.jpg',
        nombre: 'Intel Core i7 9700 4.7GHz Turbo 1151 Coffee Lake',
        precio: 37690,
    },
    {
        id: 14,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_16159_Procesador_Intel_Core_i3_9100_4.2GHz_Turbo_1151_9th_Gen_5036a1e9-med.jpg',
        nombre: 'Intel Core i3 9100 4.2GHz Turbo 1151 9th Gen',
        precio: 19500,
    },
    {
        id: 15,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_6057_Procesador_AMD_A12_9800E_3.8Ghz_APU_AM4___Radeon_R7_a9c66dcc-med.jpg',
        nombre: 'AMD A12 9800E 3.8Ghz APU AM4 + Radeon R7',
        precio: 19500,
    },
    {
        id: 16,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_19123_Procesador_AMD_RYZEN_9_3950X_4.7GHz_Turbo_AM4_ecf0fd32-med.jpg',
        nombre: 'AMD RYZEN 9 3950X 4.7GHz Turbo AM4',
        precio: 90330,
    },
    {
        id: 17,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_12728_Procesador_AMD_A6_7480_3.5GHz_FM2__Dual_Core_65W__a0d46ee3-med.jpg',
        nombre: 'AMD A6 7480 3.5GHz FM2+ Dual Core 65W',
        precio: 5310,
    },
    {
        id: 18,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_16481_Procesador_AMD_Athlon_3000G_3.5GHz___Radeon_Vega_3_AM4_8a762b5b-med.jpg',
        nombre: 'AMD Athlon 3000G 3.5GHz + Radeon Vega 3 AM4',
        precio: 18500,
    },
    {
        id: 19,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_17898_Procesador_AMD_Ryzen_5_1600_AF_Zen__12nm_AM4_Wraith_Stealth_Cooler_187bb9ab-med.jpg',
        nombre: 'AMD Ryzen 5 1600 AF Zen+ 12nm AM4 Wraith Stealth Cooler',
        precio: 20500,
    },
    {
        id: 20,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_20003_Procesador_AMD_RYZEN_7_3800XT_4.7GHz_Turbo_19451dfa-med.jpg',
        nombre: 'AMD RYZEN 7 3800XT 4.7GHz Turbo',
        precio: 51860,
    },
    {
        id: 21,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_20814_Procesador_AMD_Ryzen_5_3500X_4.1GHz_Turbo____Wraith_Stealth_Cooler_472ea236-med.jpg',
        nombre: 'AMD Ryzen 5 3500X 4.1GHz Turbo + Wraith Stealth Cooler',
        precio: 28900,
    },
    {
        id: 22,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22254_Procesador_AMD_Ryzen_5_5600X_4.6GHz_Turbo_AM4___Wraith_Stealth_Cooler_f737ec9f-med.jpg',
        nombre: 'AMD Ryzen 5 5600X 4.6GHz Turbo AM4 + Wraith Stealth Cooler',
        precio: 40300,
    },
]

const arrayRAM = [
    {
        id: 23,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_3340_Memoria_Corsair_DDR4_4GB_2400MHz_Vengeance_LPX_BLACK__d398e5e0-med.jpg',
        nombre: 'Memoria RAM Corsair DDR4 4GB 2400MHz Vengeance LPX BLACK',
        precio: 3642,
    },
    {
        id: 24,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_4881_Memoria_Corsair_DDR4_4GB_2666Mhz_Value__6d22ee2c-med.jpg',
        nombre: 'Memoria RAM Corsair DDR4 4GB 2666Mhz Value',
        precio: 3697,
    },
    {
        id: 25,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22028_Memoria_OLOy_DDR4_8GB_Owl_Black_2666MHz_CL19_8f1ca0b9-med.jpg',
        nombre: 'Memoria RAM OLOy DDR4 8GB Owl Black 2666MHz CL19',
        precio: 4150,
    },
    {
        id: 26,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25983_Memoria_GeiL_DDR4_8GB_3000MHz_EVO_X_II_RGB_2a5d75c9-med.jpg',
        nombre: 'Memoria RAM GeiL DDR4 8GB 3000MHz EVO X II RGB',
        precio: 5210,
    },
    {
        id: 27,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_6924_Mother_Asrock_H310CM-HDV_Socket_1151_8va_Gen_150c72bc-grn.jpg',
        nombre: 'Memoria RAM Team DDR4 32GB (2x16GB) 3200MHz T-Create',
        precio: 20315,
    },
]

const arrayVideo = [
    {
        id: 28,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_8821_Placa_de_Video_GeForce_MSI_GT_1030_2GB_GDDR4_OC_LP_c8126a3a-med.jpg',
        nombre: 'GeForce MSI GT 1030 2GB GDDR4 OC LP',
        precio: 27500,
    },
    {
        id: 29,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_12198_Placa_de_Video_MSI_GeForce_GTX_1660_Ti_6GB_GDDR6_Ventus_XS_OC_7d3c8fd2-med.jpg',
        nombre: 'MSI GeForce GTX 1660 Ti 6GB GDDR6 Ventus XS OC',
        precio: 120000,
    },
    {
        id: 30,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_27758_Placa_de_Video_Zotac_GeForce_RTX_3070_8GB_GDDR6_Twin_Edge_OC_29e2d107-med.jpg',
        nombre: 'Zotac GeForce RTX 3070 8GB GDDR6 Twin Edge OC',
        precio: 325000,
    },
    {
        id: 31,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_12950_Placa_de_Video_Asrock_Radeon_RX_570_4GB_Phantom_Gaming_D_46f58934-med.jpg',
        nombre: 'Asrock Radeon RX 570 4GB Phantom Gaming D',
        precio: 60070,
    },
    {
        id: 32,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_3168_Placa_de_Video_XFX_RX_580_8GB_XXX_OC_RX-580P8DFD6_4414f12e-med.jpg',
        nombre: 'XFX RX 580 8GB XXX OC RX-580P8DFD6',
        precio: 155000,
    },
    {
        id: 33,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25578_Placa_de_Video_MSI_Radeon_RX_6700_XT_12GB_GDDR6_GAMING_X_42d7f750-med.jpg',
        nombre: 'MSI Radeon RX 6700 XT 12GB GDDR6 GAMING X',
        precio: 210000,
    },
]

const arrayDisco = [
    {
        id: 34,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_9018_Disco_R__gido_WD_1TB_BLUE_64MB_SATA_6.0GB_s__ca74d162-med.jpg',
        nombre: 'Disco Rígido WD 1TB BLUE 64MB SATA 6.0GB/s',
        precio: 5120,
    },
    {
        id: 35,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_28439_Disco_R__gido_Seagate_1TB_Barracuda_64MB_SATA_6GB_s_86dd0248-med.jpg',
        nombre: 'Disco Rígido Seagate 1TB Barracuda 64MB SATA 6GB/s',
        precio: 4940,
    },
    {
        id: 36,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25929_Disco_R__gido_WD_3TB_PURPLE_64MB_SATA_6.0GB_s_ab6fe82a-med.jpg',
        nombre: 'Disco Rígido WD 3TB PURPLE 64MB SATA 6.0GB/s',
        precio: 9620,
    },
    {
        id: 37,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_26157_Disco_Rigido_Seagate_4TB_Skyhawk_256MB_5.4K_RPM_6d02d7b9-med.jpg',
        nombre: 'Disco Rigido Seagate 4TB Skyhawk 256MB 5.4K RPM',
        precio: 11690,
    },
    {
        id: 38,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_13306_Disco_S__lido_SSD_Crucial_480GB_BX500_3D_NAND_540MB_s_436cdfbd-med.jpg',
        nombre: 'Disco Sólido SSD Crucial 480GB BX500 3D NAND 540MB/s',
        precio: 6350,
    },
    {
        id: 39,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_18743_Disco_Solido_SSD_Team_256GB_GX2_530MB_s_7d116a15-med.jpg',
        nombre: 'Disco Solido SSD Team 256GB GX2 530MB/s',
        precio: 3940,
    },
]

const arrayFuentes = [
    {
        id: 40,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_9102_Fuente_Thermaltake_Smart_600W_80_Plus_White_c7c77b93-med.jpg',
        nombre: 'Thermaltake Smart 600W 80 Plus White',
        precio: 7210,
    },
    {
        id: 41,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_10449_Fuente_Thermaltake_Smart_700W_80_Plus_White__534944da-med.jpg',
        nombre: 'Thermaltake Smart 700W 80 Plus White',
        precio: 9380,
    },
    {
        id: 42,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_20117_Fuente_Corsair_CV450_450W_80_Plus_Bronze_No_incluye_cable_de_poder_0adbe0de-med.jpg',
        nombre: 'Corsair CV450 450W 80 Plus Bronze',
        precio: 5855,
    },
    {
        id: 43,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_23305_Fuente_ASUS_TUF_650B_80_Plus_Bronze_650W_a7934d75-med.jpg',
        nombre: 'Fuente ASUS TUF 650B 80 Plus Bronze 650W',
        precio: 12210,
    },
    {
        id: 44,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22432_Fuente_ASUS_ROG_STRIX_750G_80_Plus_Gold_750W_Full_Modular_38c61d29-med.jpg',
        nombre: 'ASUS ROG STRIX 750G 80 Plus Gold 750W Full Modular',
        precio: 27970,
    },
]

const arrayGabinetes = [
    {
        id: 45,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_8182_Gabinete_Gamemax_H602_WB_White_M-ATX_FAN_1_x_120mm_bb3049ea-med.jpg',
        nombre: 'Gamemax H602 WB White M-ATX FAN 1 x 120mm',
        precio: 3999,
    },
    {
        id: 46,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_13554_Gabinete_Aerocool_Bolt_Black_RGB_Ventana_Acrilica_ATX_66b77f2a-med.jpg',
        nombre: 'Aerocool Bolt Black RGB Ventana Acrilica ATX',
        precio: 4890,
    },
    {
        id: 47,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_13638_Gabinete_Aerocool_Shard_Black_RGB_Vidrio_Templado_4_x_Fan_RGB_f47eb573-med.jpg',
        nombre: 'Aerocool Shard Black RGB Vidrio Templado 4 x Fan RGB',
        precio: 10080,
    },
    {
        id: 48,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_16045_Gabinete_Cooler_Master_C700P_Black_Edition_Vidrio_Templado_E-ATX_b575c289-med.jpg',
        nombre: 'Cooler Master C700P Black Edition Vidrio Templado E-ATX',
        precio: 49000,
    },
    {
        id: 49,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_18109_Gabinete_Deepcool_MACUBE310P_WH_05bd513f-med.jpg',
        nombre: 'Deepcool MACUBE310P WH',
        precio: 10310,
    },
    {
        id: 50,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_18104_Gabinete_Deepcool_MACUBE310_BK_ad1afab4-med.jpg',
        nombre: 'Deepcool MACUBE310 BK',
        precio: 7550,
    },
]

const arrayMonitores = [
    {
        id: 51,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_9755_Monitor_Samsung_27___Curvo_LC27F390FHLX_b6fab1bd-med.jpg',
        nombre: "Samsung 27' Curvo LC27F390FHLX",
        precio: 34980,
    },
    {
        id: 52,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_5108_Monitor_Gamer_LG_25_Pulgadas_Ultrawide_IPS25UM58-P_b018ae56-med.jpg',
        nombre: 'LG 25 Pulgadas Ultrawide IPS25UM58-P',
        precio: 32280,
    },
    {
        id: 53,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_13283_Monitor_LG_24__IPS_75Hz_AMD_FreeSync_24MK430H-B_13e39792-med.jpg',
        nombre: "LG 24' IPS 75Hz AMD FreeSync 24MK430H-B",
        precio: 24730,
    },
    {
        id: 54,
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_13394_Monitor_Gamer_Samsung_24__G50_Curvo_144Hz_Full_HD_f473d83a-med.jpg',
        nombre: "Samsung 24' G50 Curvo 144Hz Full HD",
        precio: 40500,
    },
]
const nextButton = document.getElementsByClassName('btn-primary')
const dots = document.getElementsByClassName('boton')
const numberOfSteps = 8
let currentStep = 1 

// me faltan cosas aún no esta terminado


    
module.exports = {
  src_folders: ['tests'],  // Carpeta donde se guardan tus pruebas
  output_folder: 'reports', // Carpeta donde se generarán los reportes

  webdriver: {
    start_process: true,
    server_path: require('geckodriver').path,  // Geckodriver para Firefox
    port: 4444, // Puerto por defecto para Firefox
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'firefox',  // Para el navegador Firefox
      },
    },
  },
};
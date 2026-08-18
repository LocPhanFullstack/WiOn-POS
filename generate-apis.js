const $RefParser = require('json-schema-ref-parser');
const { NgOpenApiGen } = require('ng-openapi-gen');

//build link swagger
function getApiURL(service) {
  if (service == 'Account') {
    service = 'Authentication';
  }
  return `https://${service.toLowerCase()}.dev-v1.wionfnb.rke.app.dev.tmtco.org/swagger/v1/swagger.json`;
}
//build đường dẫn chứa file gen theo service
function getOutput(service) {
  return `libs/${service.toLowerCase()}/data-access/src/auto-gen`;
}
function getOptionByService(service) {
  return {
    input: getApiURL(service),
    output: getOutput(service),
    baseService: `FNB${service}BaseService`,
    configuration: `FNB${service}ApiConfiguration`,
    module: `FNB${service}ApiModule`,
    response: `FNB${service}StrictHttpResponse`,
    excludeParameters: ['X-Exclude'],
    templates: 'templates',
  };
}
async function generate(option) {
  // load the openapi-spec and resolve all $refs
  const RefParser = new $RefParser();
  const openApi = await RefParser.bundle(option.input, {
    dereference: { circular: false },
  });

  const ngOpenGen = new NgOpenApiGen(openApi, option);
  ngOpenGen.generate();
}
// tạo libs data-access trước khi thêm vào mảng services
const services = ['Account', 'File'];
const options = [];

for (let index = 0; index < services.length; index++) {
  const service = services[index];
  // load the openapi-spec and resolve all $refs
  options.push(getOptionByService(service));
}

for (let index = 0; index < options.length; index++) {
  const option = options[index];
  generate(option);
}

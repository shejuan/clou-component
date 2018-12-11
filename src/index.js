import clouTable from '../templates/clou-table'
import clouForm from '../templates/clou-form'
import clouSelectTree from '../templates/clou-select-tree'

const components = [
    clouForm,
    clouSelectTree,
    clouTable
]
const version = '1.0.0';
const install = function (Vue, config = {}) {  
    if (install.installed) return;

    components.map(component => {
        Vue.component(component.name, component);
    });
}
// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

export {
    install,
    version,
    clouForm,
    clouSelectTree,
    clouTable
};
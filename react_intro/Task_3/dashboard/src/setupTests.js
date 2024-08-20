import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TextEncoder, TextDecoder } from 'util';

// Polyfill pour TextEncoder et TextDecoder
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Configuration d'Enzyme avec l'adaptateur React 16
configure({ adapter: new Adapter() });

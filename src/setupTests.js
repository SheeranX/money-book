// create-react-app 会自动检索该文件，并与jest关联
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
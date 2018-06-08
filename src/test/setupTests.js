import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Serializer from 'jest-serializer-html'
import {shallow, mount} from 'enzyme'

expect.addSnapshotSerializer(Serializer)
global.shallow = shallow
global.mount = mount

global.flushPromises = () => new Promise(resolve => setImmediate(resolve))

configure({adapter: new Adapter()})
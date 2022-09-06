import { Style } from 'geostyler-style';

const polygonExpression: Style = {
  name: 'Polygon Fill with expressions',
  rules: [{
    name: '',
    symbolizers: [{
      kind: 'Fill',
      color: {
        name: 'strConcat',
        args: ['#00', '00', '00']
      }
    }]
  }]
};

export default polygonExpression;

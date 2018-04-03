import { StyleSheet } from 'react-native';
import { InterpolatorSpecification } from './../Types/InterpolatorSpecification';
import { getStyleInterpolator } from './getStyleInterpolator';

export const getBackgroundInterpolator = (spec: InterpolatorSpecification): StyleSheet.NamedStyles => {  
  const backgroundColor = getStyleInterpolator('backgroundColor', 'transparent', false, spec);
  return { backgroundColor };
}
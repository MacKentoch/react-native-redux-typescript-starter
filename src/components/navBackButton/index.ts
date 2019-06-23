import { connect } from 'react-redux';
import { bindActionCreators, compose, Dispatch } from 'redux';
import NavBackButton from './NavBackButton';
import * as themeActions from '../../redux/modules/theme';
import {
  State as ThemeState,
  ThemeActions,
} from '../../redux/modules/theme/types';

// #region redux map state and dispatch to props
type RootState = { theme: ThemeState };
const mapStateToProps = (state: RootState) => {
  return {
    themeName: state.theme.themeName,
  };
};
export type MappedProps = { themeName: ThemeEnum };

type FromReduxActions = {} & ThemeActions;
const mapDispatchToProps = (dispatch: Dispatch<FromReduxActions>) => {
  return bindActionCreators({ ...themeActions }, dispatch);
};
export type MappedDispatchToProps = FromReduxActions;
// #endregion

export default compose<NavBackButton>(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(NavBackButton);

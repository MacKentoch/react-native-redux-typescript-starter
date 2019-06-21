import { connect } from 'react-redux';
import { bindActionCreators, compose, Dispatch } from 'redux';
import Home from './Home';
import * as themeActions from '../../redux/modules/theme';
import { ThemeActions } from '../../redux/modules/theme/types';

// #region redux map state and dispatch to props
// type RootState = {};
const mapStateToProps = (/* state: RootState */) => {
  return {};
};
export type MappedProps = {};

type FromReduxActions = {} & ThemeActions;
const mapDispatchToProps = (dispatch: Dispatch<FromReduxActions>) => {
  return bindActionCreators({ ...themeActions }, dispatch);
};
export type MappedDispatchToProps = FromReduxActions;
// #endregion

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Home);

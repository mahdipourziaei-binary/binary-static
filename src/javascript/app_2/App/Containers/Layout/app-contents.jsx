import classNames     from 'classnames';
import PropTypes      from 'prop-types';
import React          from 'react';
import { withRouter } from 'react-router';
import { Scrollbars } from 'tt-react-custom-scrollbars';
import { connect }    from 'Stores/connect';
import InstallPWA     from './install-pwa.jsx';

const AppContents = ({
    addNotificationBar,
    children,
    is_app_blurred,
    is_contract_mode,
    is_fully_blurred,
    is_logged_in,
    is_positions_drawer_on,
    setPWAPromptEvent,
}) => {
    if (is_logged_in) {
        window.addEventListener('beforeinstallprompt', e => {
            console.log('Going to show the installation prompt'); // eslint-disable-line no-console

            e.preventDefault();

            setPWAPromptEvent(e);
            addNotificationBar({
                content : <InstallPWA />,
                autoShow: 10000, // show after 10 secs
                msg_type: 'pwa',
            });
        });
    }

    return (
        <div
            id='app_contents'
            className={classNames('app-contents', {
                'app-contents--show-positions-drawer': is_positions_drawer_on,
                'app-contents--contract-mode'        : is_contract_mode,
                'app-contents--is-blurred'           : (is_fully_blurred || is_app_blurred),
            })}
        >
            {/* Calculate height of user screen and offset height of header and footer */}
            <Scrollbars
                autoHide
                style={{ height: 'calc(100vh - 83px)' }}
            >
                {children}
            </Scrollbars>
        </div>
    );
};

AppContents.propTypes = {
    addNotificationBar    : PropTypes.func,
    children              : PropTypes.any,
    is_app_blurred        : PropTypes.bool,
    is_contract_mode      : PropTypes.bool,
    is_fully_blurred      : PropTypes.bool,
    is_logged_in          : PropTypes.bool,
    is_positions_drawer_on: PropTypes.bool,
    setPWAPromptEvent     : PropTypes.func,
};

export default withRouter(connect(
    ({ client, modules, ui }) => ({
        is_positions_drawer_on: ui.is_positions_drawer_on,
        is_logged_in          : client.is_logged_in,
        is_contract_mode      : modules.smart_chart.is_contract_mode,
        is_app_blurred        : ui.is_app_blurred,
        is_fully_blurred      : ui.is_fully_blurred,
    })
)(AppContents));

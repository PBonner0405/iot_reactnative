'use strict';

import React from 'react';
import PushNotificationIOS from 'react-native';
import PubNubReact from 'pubnub-react';
var PushNotification = require('react-native-push-notification');

import QRCodeScanViewComponent from '../../Componets/QRCodeView/QRCodeViewComponent';

export default class ScanQRCode extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ComponentVisible: true,
        }
    }

    render() {
        const {navigation} = this.props;

        return (
            <QRCodeScanViewComponent navigation={navigation} />
        );
    }
}
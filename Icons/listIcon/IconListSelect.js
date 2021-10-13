import React from 'react';
import PropTypes from 'prop-types';
import Svg, {
    Circle,
    Ellipse,
    G,
    Text,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
} from 'react-native-svg';

SVG.propTypes = {
    width: PropTypes.any, // Chiều ngang của Icon
    height: PropTypes.any, // Chiều cao của Icon
    viewBox: PropTypes.string, // ViewBox của Icon
    fill: PropTypes.string, // Màu fill của Icon
    style: PropTypes.object, // Màu của thẻ SVG
};

SVG.defaultProps = {
    width: 512,
    height: 512,
    viewBox: '0 0 512 512',
    fill: '#484848',
    style: {},
};

function SVG(props) {
    return (
        <Svg height={props.width} viewBox={props.viewBox} width={props.height} style={props.style}>
            <Path
                d="M440.749 118.535L332.466 10.253C325.855 3.641 317.066 0 307.716 0H96C76.701 0 61 15.701 61 35v442c0 19.299 15.701 35 35 35h320c19.299 0 35-15.701 35-35V143.284c0-9.347-3.64-18.136-10.251-24.749zM399.787 120H336c-2.757 0-5-2.243-5-5V51.214zM416 482H96c-2.757 0-5-2.243-5-5V35c0-2.757 2.243-5 5-5h205v85c0 19.299 15.701 35 35 35h85v327c0 2.757-2.243 5-5 5z"
                fill={props.fill}
                data-original="#000000"
            />
            <Path
                d="M272.1 229h95.571c8.284 0 15-6.716 15-15s-6.716-15-15-15H272.1c-8.284 0-15 6.716-15 15s6.715 15 15 15zM272.1 329h95.571c8.284 0 15-6.716 15-15s-6.716-15-15-15H272.1c-8.284 0-15 6.716-15 15s6.715 15 15 15zM368.1 399h-96c-8.284 0-15 6.716-15 15s6.716 15 15 15h96c8.284 0 15-6.716 15-15s-6.716-15-15-15zM197.256 173.157l-34.592 34.591-8.157-8.157c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l18.764 18.764c2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.464 10.606-4.394l45.198-45.198c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.212 0zM197.256 280.794l-34.592 34.592-8.157-8.157c-5.857-5.857-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l18.764 18.763c2.929 2.929 6.768 4.393 10.606 4.393s7.678-1.464 10.606-4.394l45.198-45.198c5.858-5.858 5.858-15.355 0-21.213-5.857-5.857-15.355-5.857-21.212.001zM197.256 380.794l-34.592 34.592-8.157-8.157c-5.857-5.857-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l18.764 18.763c2.929 2.929 6.768 4.393 10.606 4.393s7.678-1.464 10.606-4.394l45.198-45.198c5.858-5.858 5.858-15.355 0-21.213-5.857-5.857-15.355-5.857-21.212.001z"
                fill={props.fill}
                data-original="#000000"
            />
        </Svg>
    );
}

export default SVG;

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
    viewBox: '0 0 24 24',
    fill: '#bbb',
    style: {},
};

function SVG(props) {
    return (
        <Svg height={props.width} viewBox={props.viewBox} width={props.height} style={props.style}>
            <Path
                xmlns="http://www.w3.org/2000/svg"
                d="M22.683 9.394l-1.88-.239a9.45 9.45 0 00-.569-1.374l1.161-1.495a1.486 1.486 0 00-.122-1.979l-1.575-1.575a1.49 1.49 0 00-1.985-.127L16.22 3.766a9.416 9.416 0 00-1.375-.569l-.239-1.877A1.498 1.498 0 0013.12 0h-2.24c-.757 0-1.396.567-1.486 1.317l-.239 1.88a9.307 9.307 0 00-1.375.569L6.286 2.605a1.488 1.488 0 00-1.979.122L2.732 4.301a1.49 1.49 0 00-.127 1.986l1.161 1.494a9.34 9.34 0 00-.569 1.374l-1.877.239C.567 9.484 0 10.123 0 10.88v2.24c0 .757.567 1.396 1.317 1.486l1.88.239c.155.477.346.937.569 1.374l-1.161 1.495a1.486 1.486 0 00.122 1.979l1.575 1.575a1.492 1.492 0 001.985.126l1.494-1.161c.437.224.897.415 1.374.569l.239 1.876c.09.755.729 1.322 1.486 1.322h2.24c.757 0 1.396-.567 1.486-1.317l.239-1.88a9.45 9.45 0 001.374-.569l1.495 1.161c.605.47 1.459.415 1.979-.122l1.575-1.575a1.49 1.49 0 00.127-1.985l-1.161-1.494c.224-.437.415-.897.569-1.374l1.876-.239a1.498 1.498 0 001.32-1.486v-2.24a1.496 1.496 0 00-1.316-1.486zM12 17c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"
                fill={props.fill}
                data-original="#000000"
            />
        </Svg>
    );
}

export default SVG;

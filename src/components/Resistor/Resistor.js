import React from "react";
import { useBandsContext } from "../../contexts/BandsContext";
import { getOhmString } from "../../utils/calculateOhmValue";
import colors from "../../utils/maps/colors";

const Resistor = () => {
  const { first, second, multiplier, tolerance } = useBandsContext();
  return (
    <div className="resistor">
      <svg
        width="100%"
        height="100%"
        viewBox="0 20 200 100"
      >
        <defs>
          <linearGradient id="a">
            <stop
              offset={0}
              style={{ stopColor: "#d57c00", stopOpacity: 1 }}
            />
            <stop
              offset={0.25}
              style={{ stopColor: "#d57c00", stopOpacity: 0.74901962 }}
            />
            <stop
              offset={1}
              style={{ stopColor: "#d57c00", stopOpacity: 0.49803922 }}
            />
          </linearGradient>
          <linearGradient
            x1={120}
            y1={45.5}
            x2={130}
            y2={45.5}
            id="b"
            xlinkHref="#a"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(.077 .405)"
          />
        </defs>
        <path
          d="m60 90 5-5V65M70 105h5l5-5V65M120 105h-15L95 95V65"
          style={{
            fill: "none",
            fillOpacity: 0.75,
            fillRule: "evenodd",
            stroke: "#000",
            strokeWidth: 2.25,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
        />
        <path
          d="M135 90.065h-5l-5-4.315V68.492"
          style={{
            fill: "none",
            fillOpacity: 0.75,
            fillRule: "evenodd",
            stroke: "#000",
            strokeWidth: 2.09012294,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
        />
        <path
          d="M25.577 45.905c0-25 25-25 35-25s15 5 40 5 30-5 40-5 35 0 35 25-25 25-35 25-15-5-40-5-30 5-40 5-34.798.715-35-25z"
          style={{
            fill: "beige",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
          }}
        />
        <path
          d="M60.077 20.405v50c3.594 0 6.537-.641 10-1.469V21.874c-3.463-.828-6.406-1.47-10-1.47z"
          style={{
            fill: colors[first?.color],
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "none",
            strokeWidth: 0.5,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
          }}
        />
        <path
          d="M75.077 23.436v44.938a95.133 95.133 0 0 1 10-1.688V25.124a95.133 95.133 0 0 1-10-1.688z"
          style={{
            fill: colors[second?.color],
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "none",
            strokeWidth: 0.5,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
          }}
        />
        <path
          d="M90.077 25.561V66.25c2.936-.204 6.232-.334 10-.344v-40c-3.768-.01-7.064-.14-10-.344z"
          style={{
            fill: colors[multiplier?.color],
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.5,
            strokeLinecap: "square",
            strokeMiterlimit: 4,
            strokeDasharray: "1,1",
            strokeDashoffset: 0,
            strokeOpacity: 1,
          }}
        />
        <path
          d="M130.077 22.499c-2.787.669-5.917 1.423-10 2.062V67.25c4.083.638 7.213 1.393 10 2.062V22.5z"
          style={{
            opacity: 1,
            fill: colors[tolerance?.color] ?? "none",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.5,
            strokeLinecap: "square",
            strokeMiterlimit: 4,
            strokeDasharray: "1,1",
            strokeDashoffset: 0,
            strokeOpacity: 1,
          }}
        />

        <path
          style={{
            opacity: 1,
            fill: "#000",
            fillOpacity: 0.27160495,
            stroke: "#000",
            strokeWidth: 0.82305491,
            strokeLinecap: "square",
            strokeMiterlimit: 4,
            strokeDasharray: ".82305488,.82305488",
            strokeDashoffset: 0,
            strokeOpacity: 1,
          }}
          d="M5.416 40.905h20.323v10H5.416z"
        />
        <path
          style={{
            opacity: 1,
            fill: "#000",
            fillOpacity: 0.27160495,
            stroke: "#000",
            strokeWidth: 0.80977631,
            strokeLinecap: "square",
            strokeMiterlimit: 4,
            strokeDasharray: ".80977632,.80977632",
            strokeDashoffset: 0,
            strokeOpacity: 1,
          }}
          d="M175.405 40.405h19.672v10h-19.672z"
        />
        <switch
          style={{
            fontSize: 12,
            fontStyle: "normal",
            fontWeight: 400,
            fill: "#000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Bitstream Vera Sans",
          }}
        >
          <text
            x={3.371}
            y={95}
            style={{
              fontSize: 12,
              fontStyle: "normal",
              fontWeight: 400,
              fill: "#000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeOpacity: 1,
              fontFamily: "Bitstream Vera Sans",
            }}
            xmlSpace="preserve"
            systemLanguage="id"
          >
            <tspan x={3.371} y={95}>
              {"Pita ke-1"}
            </tspan>
          </text>
          <text
            x={3.371}
            y={95}
            style={{
              fontSize: 10,
              fontStyle: "normal",
              fontWeight: 400,
              fill: "#000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeOpacity: 1,
              fontFamily: "Bitstream Vera Sans",
            }}
            xmlSpace="preserve"
          >
            <tspan x={3.371} y={95}>
              {`Band A(${first?.value ?? 0})`}
            </tspan>
          </text>
        </switch>
        <switch
          style={{
            fontSize: 12,
            fontStyle: "normal",
            fontWeight: 400,
            fill: "#000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Bitstream Vera Sans",
          }}
        >
          <text
            x={9.057}
            y={109.117}
            style={{
              fontSize: 12,
              fontStyle: "normal",
              fontWeight: 400,
              fill: "#000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeOpacity: 1,
              fontFamily: "Bitstream Vera Sans",
            }}
            xmlSpace="preserve"
            systemLanguage="id"
          >
            <tspan x={9.057} y={109.117}>
              {"Pita ke-2"}
            </tspan>
          </text>
          <text
            x={9.057}
            y={109.117}
            style={{
              fontSize: 10,
              fontStyle: "normal",
              fontWeight: 400,
              fill: "#000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeOpacity: 1,
              fontFamily: "Bitstream Vera Sans",
            }}
            xmlSpace="preserve"
          >
            <tspan x={9.057} y={109.117}>
              {`Band B(${second?.value ?? 0})`}
            </tspan>
          </text>
        </switch>
        <switch
          style={{
            fontSize: 12,
            fontStyle: "normal",
            fontWeight: 400,
            fill: "#000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Bitstream Vera Sans",
          }}
        >
          <text
            x={123.828}
            y={109.117}
            style={{
              fontSize: 12,
              fontStyle: "normal",
              fontWeight: 400,
              fill: "#000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeOpacity: 1,
              fontFamily: "Bitstream Vera Sans",
            }}
            xmlSpace="preserve"
            systemLanguage="id"
          >
            <tspan x={123.828} y={109.117}>
              {"Pengali"}
            </tspan>
          </text>
          <text
            x={123.828}
            y={109.117}
            style={{
              fontSize: 10,
              fontStyle: "normal",
              fontWeight: 400,
              fill: "#000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeOpacity: 1,
              fontFamily: "Bitstream Vera Sans",
            }}
            xmlSpace="preserve"
          >
            <tspan x={123.828} y={109.117}>
              {`Band C(${getOhmString(multiplier?.value ?? "")})`}
            </tspan>
          </text>
        </switch>
        <switch
          style={{
            fontSize: 12,
            fontStyle: "normal",
            fontWeight: 400,
            fill: "#000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
            fontFamily: "Bitstream Vera Sans",
          }}
        >
          <text
            x={137.133}
            y={94.117}
            style={{
              fontSize: 12,
              fontStyle: "normal",
              fontWeight: 400,
              fill: "#000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeOpacity: 1,
              fontFamily: "Bitstream Vera Sans",
            }}
            xmlSpace="preserve"
            systemLanguage="id"
          >
            <tspan x={137.133} y={94.117}>
              {"Toleransi"}
            </tspan>
          </text>
          <text
            x={137.133}
            y={94.117}
            style={{
              fontSize: 10,
              fontStyle: "normal",
              fontWeight: 400,
              fill: "#000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeOpacity: 1,
              fontFamily: "Bitstream Vera Sans",
            }}
            xmlSpace="preserve"
          >
            <tspan x={137.133} y={94.117}>
              {`Band D(±${tolerance?.value ?? ""}%)`}
            </tspan>
          </text>
        </switch>
      </svg>
    </div>
  );
};

export default Resistor;

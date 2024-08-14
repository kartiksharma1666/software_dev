import React from "react";
import { themeColors } from "../theme";
import match from "./Website_content/TR_Website_content-05.svg";
import track from "./Website_content/TR_Website_content-07.svg";
import consult from "./Website_content/TR_Website_content-09.svg";

export const LocationIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64.239 85.429"
    width={24}
    height={24}
    {...props}
  >
    <path
      fill={props.color ? props.color : themeColors.fg}
      d="M36.083 83.507c8.582-10.74 28.156-36.771 28.156-51.391C64.237 14.376 49.855-.002 32.116 0 14.38.002.002 14.38 0 32.116c0 14.62 19.575 40.651 28.156 51.391a5.053 5.053 0 0 0 7.932 0h-.005ZM32.12 21.409c5.913 0 10.706 4.794 10.706 10.707S38.033 42.822 32.12 42.822 21.413 38.03 21.413 32.116c0-5.914 4.794-10.707 10.707-10.707Z"
    />
  </svg>
);

export const Arrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 57.187 133.073"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fill={props.color ? props.color : themeColors.fg}
      d="M1.62 4.318a9.68 9.68 0 0 0-.004 10.716l30.638 46.148a9.68 9.68 0 0 1 0 10.709L1.616 118.038a9.68 9.68 0 0 0 .005 10.717c3.83 5.757 12.288 5.757 16.119 0l37.826-56.857a9.68 9.68 0 0 0 0-10.724L17.74 4.318c-3.83-5.757-12.288-5.757-16.118 0Z"
    />
  </svg>
);

export const Next = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 85.313 76.043"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fill="none"
      stroke="#9ebc80"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={11}
      d="M5.5 38.021h74.313M47.335 5.5l32.478 32.521-32.478 32.522"
    />
  </svg>
);

export const CallIcon = (props) => (
  <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 49.011 49.011"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#9ebc80"
        d="M15.782 2.358A3.815 3.815 0 0 0 11.245.137L2.825 2.435A3.854 3.854 0 0 0 0 6.131c0 23.682 19.198 42.88 42.88 42.88a3.854 3.854 0 0 0 3.696-2.823l2.298-8.408a3.815 3.815 0 0 0-2.22-4.537l-9.193-3.847a3.815 3.815 0 0 0-4.432 1.11l-3.854 4.72a32.35 32.35 0 0 1-15.379-15.38l4.719-3.853a3.818 3.818 0 0 0 1.103-4.425l-3.836-9.2v-.01Z"
      />
    </svg>
);

export const EmailIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 113.131 90.498"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fill="#9ebc80"
      d="M101.818 0H11.313C5.083.023.047 5.083.055 11.313L0 79.185c.019 6.24 5.073 11.294 11.313 11.313h90.505c6.24-.02 11.294-5.073 11.313-11.313V11.313C113.112 5.073 108.058.02 101.818 0Zm-2.266 24.038L59.561 49.039a5.722 5.722 0 0 1-5.998 0L13.578 24.038a4.82 4.82 0 1 1 5.089-8.146l37.87 23.7 37.872-23.7a4.82 4.82 0 1 1 5.088 8.146h.055Z"
    />
  </svg>
);

export const SearchIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 108 108"
    width="1.2em"
    height="1.2em"
    {...props}
  >
    <path
      fill="none"
      stroke="#95af6b"
      strokeLinecap="round"
      strokeWidth={14}
      d="M103 103 79.86 79.817m12.825-30.996c.012 24.213-19.608 43.852-43.821 43.864C24.65 92.697 5.012 73.077 5 48.864 4.988 24.65 24.607 5.012 48.82 5h.022c24.214 0 43.843 19.629 43.843 43.842v-.021Z"
    />
  </svg>
);

export const AppStore = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 222.792 63.954"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fill={themeColors.lightAccent}
      d="M111.4.01c34.842 0 69.685.005 104.528-.01 1.852 0 3.48.485 4.828 1.76 1.386 1.31 2.034 2.95 2.034 4.847.003 8.313.001 16.627.001 24.94 0 8.607.003 17.214 0 25.822-.002 3.191-2.03 5.747-5.128 6.442-.482.108-.99.137-1.486.137-25.757.006-51.514.005-77.271.005H6.546c-3.109 0-5.645-1.976-6.368-4.988a6.591 6.591 0 0 1-.159-1.524C.012 40.462.027 23.483 0 6.503-.005 3.54 2.125.532 5.637.047c.434-.06.88-.035 1.322-.035l104.44-.001ZM54.711 40.309c-3.418-1.702-5.48-4.265-5.735-8.073-.256-3.823 1.516-6.627 4.552-8.765-.076-.112-.13-.198-.19-.28-2.421-3.264-6.89-4.743-10.857-3.546-1.231.372-2.428.861-3.633 1.316a3.542 3.542 0 0 1-2.618-.006c-.847-.327-1.696-.65-2.546-.97-1.453-.546-2.944-.802-4.49-.519-3.68.672-6.283 2.761-7.895 6.095-1.396 2.885-1.562 5.956-1.2 9.075.32 2.754 1.106 5.388 2.265 7.906 1.3 2.823 2.99 5.388 5.246 7.544 1.227 1.173 2.69 1.828 4.417 1.401 1.017-.251 1.998-.661 2.983-1.031 1.476-.555 2.994-.78 4.534-.436.95.213 1.874.57 2.782.93 1.17.466 2.357.716 3.61.506 1.4-.235 2.488-1.026 3.4-2.054a26.93 26.93 0 0 0 4.07-6.04c.487-.993.874-2.034 1.306-3.053Zm40.246 8.965c.139.183.208.27.272.359.614.855 1.434 1.414 2.442 1.705 3.226.933 6.506-.542 8.043-3.626.933-1.873 1.104-3.874.934-5.919-.128-1.528-.59-2.947-1.47-4.226-2.628-3.82-7.833-3.244-9.9-.696-.209.258-.41.522-.684.87l-.21-2.516h-3.036v22.522h3.61v-8.472Zm14.858-14.061v22.526h3.607V49.36c.381.401.692.82 1.088 1.13 1.458 1.145 3.148 1.298 4.891.964 2.383-.456 3.996-1.929 4.927-4.104 1.118-2.611 1.182-5.327.23-7.985-.87-2.434-2.542-4.13-5.234-4.453-2.42-.29-4.502.405-5.984 2.468-.07.098-.15.188-.279.347l-.22-2.515h-3.026Zm-21.58 16.015c-.004-.084.003-.13-.01-.169-2.35-7.268-4.702-14.536-7.048-21.805-.077-.24-.208-.301-.447-.3-1.22.012-2.441.018-3.661-.002-.323-.006-.456.102-.552.402-2.285 7.12-4.579 14.238-6.87 21.357-.051.16-.085.326-.138.528 1.126 0 2.198-.01 3.27.007.3.005.43-.077.518-.378.565-1.924 1.16-3.839 1.73-5.76.088-.293.203-.42.537-.417 2.147.017 4.293.015 6.44.001.3-.002.431.085.522.377.603 1.942 1.227 3.879 1.846 5.816.038.12.093.234.137.342h3.726Zm55.829-18.621c.26-.855.476-1.661.757-2.444.14-.39.023-.54-.317-.684-1.63-.689-3.338-.862-5.086-.814-1.308.036-2.558.297-3.729.897-3.935 2.016-4.43 7.18-1.014 9.789 1.097.837 2.32 1.412 3.582 1.943.846.357 1.695.743 2.468 1.233 1.183.752 1.69 1.89 1.47 3.289-.23 1.473-1.204 2.266-2.581 2.605-1.507.372-3.01.227-4.474-.219-.791-.24-1.544-.607-2.334-.925-.26.939-.53 1.907-.807 2.899.24.132.449.27.675.367 2.943 1.264 5.965 1.422 8.966.352 2.606-.93 4.057-2.85 4.158-5.68.07-1.933-.575-3.558-2.088-4.816-1.19-.99-2.578-1.609-3.99-2.195-1.072-.444-2.144-.9-2.978-1.745-1.183-1.201-.988-3.193.397-4.155.698-.486 1.491-.674 2.325-.706 1.597-.063 3.12.239 4.6 1.01Zm31.296 10.463c-.042-.525-.057-1.055-.132-1.576-.294-2.05-1.161-3.797-2.81-5.104-1.566-1.24-3.39-1.632-5.334-1.527-3.218.175-5.533 1.725-6.767 4.714-.96 2.323-.98 4.727-.14 7.09.719 2.02 2.053 3.542 4.078 4.365 1.374.558 2.812.664 4.28.486 1.967-.238 3.615-1.069 4.881-2.6 1.401-1.693 1.926-3.684 1.944-5.848Zm27.405.992c.16-1.308.17-2.55-.099-3.78-.846-3.88-3.567-5.938-7.71-5.363-2.585.358-4.328 1.878-5.413 4.155-1.132 2.375-1.242 4.879-.477 7.376.789 2.574 2.556 4.21 5.194 4.801 2.436.546 4.837.287 7.198-.496.45-.149.556-.34.423-.784-.186-.621-.305-1.262-.457-1.91-1.612.605-3.22.85-4.86.705a6.775 6.775 0 0 1-2.108-.54c-1.62-.718-2.488-2.531-2.324-4.164h10.633Zm-52.59-6.218v.535c.001 2.613-.01 5.226.011 7.84.005.627.071 1.26.183 1.878.277 1.535 1.06 2.707 2.607 3.194 1.397.44 2.813.31 4.21-.055.094-.024.224-.17.223-.257-.01-.83-.046-1.66-.073-2.457-.605.03-1.146.075-1.687.079-.786.006-1.355-.375-1.649-1.093-.152-.373-.275-.789-.28-1.187-.03-2.76-.027-5.52-.032-8.279 0-.053.024-.107.046-.198h3.836V35.18h-3.9v-3.995l-3.51 1.06v2.945h-2.316v2.654h2.332Zm36.744.358c-.003.008.015-.019.015-.046.004-.705.008-1.41.01-2.115 0-1.276-.067-1.333-1.363-1.174l-.13.021c-1.755.29-2.873 1.362-3.596 2.92-.062.133-.122.267-.182.401l-.085-.03-.141-2.953h-3.028v15.98h3.6v-.512c0-2.57-.004-5.14.005-7.711.002-.468.012-.945.1-1.401.303-1.568 1.034-2.832 2.704-3.23.655-.157 1.36-.104 2.091-.15ZM45.771 8.944c-.182.011-.314.005-.44.029-3.459.645-5.969 2.519-7.41 5.752a8.163 8.163 0 0 0-.733 3.583c.01.357.127.555.522.494.505-.08 1.028-.092 1.516-.23 2.957-.84 4.873-2.807 5.976-5.616.498-1.269.727-2.586.57-4.012Zm25.82 6.656c0 1.658.002 3.315-.002 4.973 0 .234-.012.423.32.445 1.407.093 2.813.18 4.211-.09 1.852-.36 3.3-1.256 4.033-3.081.407-1.016.479-2.079.422-3.154-.122-2.286-1.465-3.901-3.694-4.446-1.58-.386-3.171-.266-4.768-.107-.454.045-.538.206-.532.618.024 1.614.01 3.228.01 4.842Zm26.176-.425c.456 1.584.896 3.124 1.343 4.662.346 1.192.35 1.182 1.583 1.182.28 0 .406-.08.49-.36.472-1.568.969-3.13 1.458-4.693l.894-2.847c-.514 0-.966.008-1.417-.003-.231-.006-.33.074-.386.31-.182.768-.404 1.526-.594 2.293-.29 1.18-.567 2.365-.856 3.57-.032-.088-.062-.154-.08-.223-.46-1.693-.914-3.389-1.38-5.08-.24-.871-.25-.844-1.154-.878-.416-.016-.579.117-.69.516-.526 1.886-1.089 3.762-1.641 5.652-.034-.124-.073-.246-.102-.372-.417-1.825-.83-3.652-1.256-5.475-.027-.115-.154-.288-.243-.293-.521-.028-1.045-.014-1.628-.014l2.323 7.89c.486 0 .941.015 1.395-.011.103-.006.258-.131.289-.232.507-1.634 1-3.273 1.49-4.912.065-.216.105-.439.162-.682Zm48.444 5.815v-.378l-.052-10.038c-.002-.265.016-.53-.01-.792-.01-.1-.118-.267-.186-.27-.505-.023-1.012-.013-1.564-.013v4.367c-.376-.246-.707-.566-1.102-.7-1.208-.407-2.353-.249-3.318.642-1.596 1.475-1.72 4.623-.318 6.292 1.317 1.567 3.968 1.384 4.8-.212.015-.027.065-.034.131-.065l.074 1.167h1.545ZM184.9 9.517v11.465h1.72v-.642c0-1.38-.016-2.76.008-4.14.016-1.017.71-1.75 1.634-1.791.994-.044 1.55.486 1.686 1.619.021.174.016.352.016.528.002 1.32.001 2.642.001 3.964v.469h1.765c0-.812.01-1.6-.003-2.39-.017-1.07.018-2.147-.097-3.207-.199-1.826-1.802-2.87-3.5-2.28-.55.191-1.012.631-1.522.962V9.517h-1.708Zm-64.848 7.557c.015.22.02.44.046.658.176 1.461.843 2.626 2.245 3.166 1.48.57 2.933.41 4.156-.688 1.053-.944 1.333-2.203 1.273-3.562-.133-3.04-3.373-4.748-5.936-3.111-1.277.815-1.756 2.07-1.784 3.537Zm-37.359.063c0 .132-.009.265.002.396.128 1.551.798 2.764 2.278 3.38 1.487.62 3.271.234 4.314-.868.86-.91 1.127-2.023 1.094-3.242-.088-3.243-2.934-4.555-5.478-3.49-1.644.688-2.2 2.131-2.21 3.824Zm70.807-.052c.01.208.01.4.031.59.165 1.496.835 2.688 2.28 3.231 1.502.565 2.96.39 4.18-.747.955-.891 1.253-2.053 1.22-3.322-.086-3.256-2.884-4.58-5.452-3.538-1.648.668-2.225 2.107-2.259 3.785Zm17.149 3.912c0-.262.003-.493 0-.724-.025-1.613.011-3.23-.098-4.837-.081-1.189-.74-2.056-1.946-2.391-1.14-.318-2.335.126-3.078 1.108-.035.046-.09.078-.154.132l-.122-1.15h-1.452v7.854h1.742v-.496c0-1.32-.004-2.642.003-3.963.002-.247.026-.499.08-.74.193-.852.892-1.398 1.743-1.382.813.015 1.283.457 1.469 1.403.039.2.046.407.047.612.004 1.365.002 2.73.003 4.095v.48h1.763Zm-34.416.001c-.026-.505-.068-.97-.072-1.437-.012-1.189.01-2.378-.013-3.566-.033-1.696-.808-2.727-2.3-2.958-.613-.095-1.264-.051-1.881.04-.55.081-1.078.314-1.638.487l.38 1.223c.726-.444 1.484-.606 2.297-.56.952.054 1.48.687 1.336 1.684-.136 0-.28-.007-.425.001-1.016.063-2.016.192-2.906.744-1.518.942-1.663 3.08-.28 4.092.964.705 2.594.557 3.49-.33.094-.093.12-.255.177-.386l.157.155.152.811h1.526Zm-30.444-7.89v7.881h1.739v-.58c.01-1.454-.02-2.91.045-4.36.046-1.02.84-1.676 1.817-1.64.879.03 1.43.656 1.448 1.709.024 1.468.015 2.937.022 4.405 0 .156.014.311.02.458h1.73c0-1.646.004-3.26-.005-4.874a4.374 4.374 0 0 0-.096-.916c-.244-1.102-.85-1.927-1.996-2.158-1.157-.234-2.185.067-2.948 1.036-.057.072-.121.138-.232.264l-.027-.554q-.029-.67-.69-.67h-.827Zm94.826 6.499c-.93.062-1.788.192-2.64.158-1.195-.048-2.063-1.108-1.951-2.282h5.235c0-.503.048-.973-.009-1.43-.162-1.311-.688-2.434-2.025-2.888-1.374-.468-2.686-.271-3.737.806-1.099 1.127-1.361 2.527-1.128 4.036.26 1.682 1.245 2.782 2.9 3.037.838.13 1.73.053 2.577-.067 1.048-.148 1.04-.21.807-1.25l-.029-.12Zm-21.835-5.175c0 .244-.002.445 0 .646.023 1.378.016 2.757.08 4.133.037.806.4 1.472 1.203 1.79.682.27 1.383.205 2.074.024.092-.024.216-.164.217-.252.004-.359-.034-.718-.056-1.065h-.717c-.565-.004-.827-.198-.976-.752a2.242 2.242 0 0 1-.076-.562 483.523 483.523 0 0 1-.005-3.653c0-.097.025-.193.045-.334h1.85v-1.303h-1.895v-1.94c-.552.165-1.058.302-1.552.476-.09.032-.175.212-.183.329-.023.374-.008.75-.008 1.169h-1.122v1.294h1.122Zm-61.353 6.557V9.54h-1.707v11.45h1.707Z"
    />
    <path
      fill={themeColors.lightAccent}
      d="m81.708 41.919-2.97-9.746-2.87 9.746h5.84ZM94.844 43.354c.128-.967.135-1.97.409-2.894.757-2.557 3.802-3.598 5.89-2.074.746.545 1.232 1.294 1.515 2.162.617 1.892.595 3.788-.137 5.637-.785 1.981-2.461 2.89-4.491 2.517-1.698-.312-3.018-1.92-3.067-3.748-.014-.528-.002-1.057-.002-1.585l-.117-.015ZM113.3 43.332c.12-.924.142-1.875.38-2.768a3.856 3.856 0 0 1 5.097-2.63 3.53 3.53 0 0 1 1.992 1.837c1.097 2.328 1.088 4.695-.072 6.984-1.293 2.55-4.476 2.453-5.907 1.127-.914-.845-1.332-1.907-1.38-3.128-.018-.469-.003-.94-.003-1.409l-.106-.013Z"
    />
    <path
      fill={themeColors.lightAccent}
      d="M81.708 41.919h-5.84l2.87-9.746 2.97 9.746ZM171.627 43.143c.017 1.602-.348 3.044-1.267 4.315-1.475 2.04-4.389 2.051-5.866.016-1.05-1.448-1.324-3.106-1.22-4.846a7.603 7.603 0 0 1 .94-3.265c1.382-2.508 5.064-2.567 6.464-.004a7.537 7.537 0 0 1 .949 3.784ZM199.51 41.503h-7.48c.112-.471.176-.917.326-1.332.47-1.292 1.228-2.35 2.622-2.745 2.162-.614 4.104.717 4.422 2.993.049.344.071.692.11 1.084ZM73.37 19.69v-8.15c3.045-.634 5.271.539 5.344 3.48a7.32 7.32 0 0 1-.219 2.039c-.422 1.586-1.738 2.554-3.45 2.628-.54.023-1.08.003-1.674.003ZM144.43 17.048c-.022.355-.026.722-.074 1.084a1.91 1.91 0 0 1-1.477 1.607c-.756.166-1.515-.165-1.964-.857-.674-1.04-.611-2.84.134-3.827.446-.592 1.199-.86 1.913-.682.723.18 1.3.794 1.396 1.523.05.377.05.76.073 1.152ZM121.856 17.085c-.023-.768.14-1.485.602-2.114a1.78 1.78 0 0 1 2.898.017c.818 1.147.798 3.057-.042 4.186-.751 1.009-2.196.97-2.916-.087-.41-.602-.567-1.279-.542-2.002ZM84.46 17.073c-.01-.688.127-1.34.496-1.93.763-1.218 2.398-1.236 3.11.01.742 1.298.73 2.645-.076 3.918-.718 1.134-2.232 1.116-2.983.004-.409-.604-.558-1.282-.547-2.002ZM159.39 17.17a3.335 3.335 0 0 1-.579 1.928c-.741 1.079-2.228 1.075-2.971-.004-.738-1.07-.748-2.93-.023-4.01.776-1.155 2.329-1.132 3.075.045.375.59.5 1.244.499 2.04ZM134.449 17.919c.031.556-.05 1.133-.578 1.56a1.73 1.73 0 0 1-1.482.375c-.399-.079-.698-.33-.785-.742-.107-.502-.101-1.008.311-1.39.669-.618 1.525-.606 2.358-.637.055-.002.154.151.168.242.027.172.008.35.008.592ZM196.005 16.213c.133-1.284.994-2.152 2.026-2.053 1.003.095 1.618.898 1.545 2.053h-3.57Z"
    />
  </svg>
);

export const PlayStore = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 216.885 62.385"
    width="1em"
    height="1em"
    {...props}
  >
    <g fill={themeColors.lightAccent}>
      <path d="M108.44 0C142.133 0 175.825 0 209.517.007c1.217 0 2.43.156 3.528.732 1.776.932 3.011 2.344 3.55 4.297.16.585.276 1.206.277 1.81.014 16.228.02 32.456-.002 48.685-.002 1.602-.54 3.058-1.594 4.322-1.127 1.353-2.567 2.11-4.26 2.428-.457.086-.932.1-1.398.1-67.446.005-134.891.005-202.337.001-2.08 0-3.93-.651-5.383-2.18C.855 59.101.2 57.783.1 56.247a48.082 48.082 0 0 1-.094-3.087C0 37.755-.006 22.35.01 6.943.013 4.92.764 3.15 2.288 1.803 3.463.765 4.844.108 6.467.09 8.244.07 10.02.004 11.797.004 44.013 0 76.228 0 108.44 0ZM15.578 51.425c.703.626 1.447.75 2.244.6.956-.182 1.756-.716 2.582-1.194 1.535-.89 3.088-1.752 4.628-2.635 1.954-1.12 3.9-2.255 5.854-3.375a978.494 978.494 0 0 1 5.914-3.362 649.005 649.005 0 0 1 6.286-3.513c1.99-1.092 4-2.148 5.994-3.234.746-.406 1.5-.809 2.2-1.286 1.33-.907 1.709-2.534.368-3.674-.822-.7-1.79-1.235-2.721-1.794-1.24-.745-2.513-1.436-3.764-2.162-1.212-.704-2.41-1.433-3.624-2.132-1.15-.663-2.315-1.3-3.47-1.955-1.7-.964-3.395-1.936-5.094-2.902-1.206-.686-2.418-1.364-3.623-2.052-1.672-.953-3.34-1.914-5.01-2.87-1.256-.718-2.505-1.45-3.774-2.144-.821-.45-1.654-.892-2.519-1.245-1.373-.56-3.063.379-3.061 2.071.011 12.297-.007 24.594.026 36.891.004 1.292.541 2.008 1.887 2.25.128.023.242.122.363.185l-.074.168-1.611-.635Zm66.02-19.927 2.13-2.126c-.269-.223-.559-.478-.864-.714-2.74-2.114-5.83-2.667-9.132-1.846-2.288.569-4.221 1.81-5.728 3.667-1.712 2.11-2.61 4.475-2.457 7.227.096 1.741.563 3.347 1.47 4.827 1.055 1.724 2.454 3.094 4.242 4.061 2.255 1.222 4.638 1.575 7.17 1.191 2.72-.411 4.776-1.836 6.351-4.004 1.512-2.082 1.845-4.482 1.713-6.978-.032-.61-.095-.634-.722-.634h-9.48v3.029h6.932c-.042.194-.086.347-.107.503-.269 2.02-1.416 3.428-3.147 4.383-1.54.85-3.208 1.008-4.934.77-2.022-.28-3.674-1.229-4.852-2.863-1.576-2.188-1.943-4.639-1.162-7.218.485-1.599 1.402-2.921 2.796-3.9 1.741-1.224 3.662-1.688 5.746-1.339a7.495 7.495 0 0 1 3.332 1.45c.247.189.501.367.703.514ZM120.967 48.7c-.786.34-1.537.667-2.29.987-.202.085-.364.198-.237.432.717 1.324 1.694 2.415 3.039 3.11 1.37.706 2.84.802 4.358.587 1.259-.177 2.365-.66 3.265-1.532 1.29-1.249 1.882-2.862 1.907-4.606.062-4.245.02-8.492.02-12.738v-.472h-2.956v1.052c-.094-.08-.14-.117-.183-.158-1.485-1.387-3.227-1.734-5.145-1.193-1.422.401-2.578 1.22-3.504 2.389-1.326 1.674-1.86 3.576-1.444 5.637.549 2.716 2.17 4.577 4.901 5.34 1.932.54 3.678.228 5.123-1.26.063-.063.157-.096.324-.196-.05.669-.09 1.24-.137 1.81-.206 2.58-2.552 3.712-4.686 3.073-1.145-.343-1.917-1.12-2.355-2.262Zm39.035-8.874c.245 0 .425.003.605 0 1.517-.03 3.039-.002 4.55-.107 1.565-.109 2.883-.83 3.988-1.937 1.86-1.865 2.269-4.703 1.152-6.975-1.183-2.406-3.24-3.595-5.892-3.668-2.329-.064-4.661-.014-6.992-.014h-.478v20.26h3.067v-7.56Zm20.43-1.642c1.085-1.633 2.803-1.674 4.13-1.2 1.304.465 1.939 1.673 1.833 2.271-.859-.206-1.713-.526-2.587-.596-1.67-.134-3.269.245-4.618 1.274-1.5 1.144-1.973 2.61-1.58 4.244.539 2.245 2.465 3.416 4.56 3.587 1.552.127 2.904-.35 3.956-1.549.122-.139.267-.257.493-.473v1.638h2.929v-.52c0-2.251.004-4.503-.004-6.755a7.524 7.524 0 0 0-.094-1.257c-.253-1.45-.991-2.646-2.126-3.548-1.246-.991-2.753-1.405-4.313-1.379-.932.016-1.896.258-2.78.579-1.205.436-2.094 1.294-2.562 2.548l2.764 1.136Zm-79.12 2.891c-.016-4.135-2.947-6.95-6.911-6.99-4.057-.04-6.88 2.905-7.085 6.462-.264 4.572 3.118 7.549 6.988 7.557 3.818.008 6.962-2.72 7.008-7.029Zm15.087.004c.09-4.127-3.003-6.983-6.938-6.996-4.06-.013-6.935 2.98-7.048 6.716-.13 4.307 3.16 7.31 6.996 7.312 3.942.002 7.071-2.966 6.99-7.032Zm34.075-1.785c-.395-.777-.728-1.545-1.156-2.257-1.135-1.886-2.83-2.89-5.033-2.96-1.204-.039-2.34.284-3.38.905-1.105.66-1.922 1.578-2.484 2.742-.71 1.472-.878 3.01-.626 4.603.255 1.615.978 2.982 2.223 4.065 1.407 1.224 3.022 1.777 4.896 1.667 1.118-.065 2.142-.348 3.096-.92.908-.544 1.69-1.213 2.235-2.162l-2.31-1.63c-1.998 2.889-5.619 2.352-6.767-.143l9.306-3.91Zm38.882-4.86c.585 1.32 1.153 2.582 1.704 3.85 1.18 2.718 2.35 5.44 3.53 8.158.1.23.118.41.003.658-.828 1.768-1.633 3.547-2.439 5.326-.172.38-.317.771-.49 1.193.977 0 1.876.015 2.773-.014a.65.65 0 0 0 .467-.298c.254-.487.454-1.003.673-1.51.843-1.954 1.682-3.91 2.528-5.863.616-1.421 1.243-2.838 1.858-4.26.757-1.748 1.51-3.498 2.26-5.249.28-.65.551-1.305.84-1.992-1.048 0-2.038-.008-3.027.012-.117.002-.291.137-.337.25-.835 2.1-1.654 4.208-2.48 6.312-.288.736-.585 1.468-.913 2.289-.325-.752-.62-1.4-.887-2.06-.875-2.165-1.735-4.336-2.621-6.496-.056-.137-.276-.29-.423-.293-.974-.027-1.949-.014-3.02-.014Zm-53.33 12.952V27.163h-3.056v20.224h3.056Zm36.44-.01h3.057V27.15h-3.056v20.226Zm-44.832-30.321c-.142-.2-.21-.286-.269-.38-1.211-1.95-2.477-3.868-3.605-5.865-.451-.8-.964-1.042-1.813-.968-.427.037-.533.149-.53.56.015 3.042.007 6.086.009 9.13 0 .146.013.293.02.44h1.462v-7.397c.127.153.2.223.253.306 1.461 2.303 2.919 4.607 4.385 6.907.061.096.194.2.298.206.467.022.936.01 1.448.01V16.23c0-1.963 0-3.926-.002-5.89 0-.2.072-.465-.264-.474-.45-.011-.902-.003-1.392-.003v7.193Zm-7.669-2.089c.2-2.77-2.335-5.072-4.802-5.221-3.244-.198-5.625 2.451-5.628 5.143-.003 2.98 2.313 5.222 5.134 5.31 2.866.09 5.51-2.434 5.296-5.232ZM74.68 11.569c-.056-.089-.102-.18-.163-.259-.073-.095-.147-.195-.239-.27-.976-.796-2.047-1.292-3.355-1.282-1.786.013-3.144.816-4.157 2.191-.838 1.138-1.082 2.455-.858 3.877.287 1.813 1.319 3.06 2.89 3.862.958.489 2.012.6 3.106.42 1.378-.227 2.471-.873 3.28-1.994.701-.973.773-2.11.806-3.255.01-.352-.13-.438-.457-.435-1.462.013-2.924.005-4.386.007-.086 0-.172.018-.286.031 0 .48.007.934-.002 1.388-.005.278.153.323.382.32.533-.006 1.066-.002 1.599-.002h1.576c-.093 1.288-1.239 2.374-2.677 2.637-1.577.288-3.433-.908-3.9-2.029-.695-1.664-.392-3.492 1.098-4.653a3.252 3.252 0 0 1 1.898-.707c1.125-.045 2.1.261 2.797 1.19l1.047-1.037Zm8.7 6.798h-4.342v-2.764h4.048v-1.448h-.528c-1.051 0-2.103-.001-3.154.001-.213 0-.404-.004-.402-.296.003-.802.001-1.604.001-2.455h4.35V9.862c-1.85 0-3.662.014-5.475-.01-.436-.006-.536.137-.534.55.016 3.044.009 6.089.01 9.134 0 .146.013.293.02.435h6.006v-1.604Zm1.048-8.488v1.553h2.715v8.541h1.664v-8.568H91.5V9.88h-7.073Zm16.981 10.1h1.558V11.4h2.734c0-.428-.008-.808.003-1.187.007-.253-.097-.353-.35-.352-2.118.004-4.234-.002-6.35.015-.117.001-.319.183-.33.295-.04.402-.016.81-.016 1.264h2.751v8.546Zm-3.846.004v-9.05c0-1.074 0-1.054-1.089-1.08-.435-.01-.572.111-.57.56.02 3.044.01 6.088.011 9.133 0 .146.013.291.02.437h1.629Z" />
      <path d="M120.684 40.904c-.126-1.8 1.258-3.573 2.84-4.026 1.86-.532 3.763.53 4.386 2.25.634 1.755.456 3.44-.779 4.867-.793.916-1.906 1.298-3.136 1.081-1.839-.323-2.846-1.515-3.26-3.266-.07-.29-.037-.603-.051-.906ZM160.046 29.962c1.644 0 3.262-.093 4.865.024 1.866.137 3.464 2.173 2.837 4.16-.418 1.328-1.238 2.253-2.618 2.62-.072.018-.146.04-.22.04-1.61.003-3.222.002-4.864.002v-6.846ZM182.778 45.154c-.848-.132-1.651-.203-2.21-.97-.496-.68-.197-1.792.427-2.24.577-.416 1.246-.577 1.924-.644a5.959 5.959 0 0 1 3.036.474c.218.096.365.214.274.478-.436 1.276-1.167 2.286-2.515 2.71-.31.098-.64.133-.936.191ZM90.42 40.942c.09-1.501.573-2.773 1.924-3.637 1.747-1.118 4.288-.512 5.25 1.323.966 1.84.838 3.659-.493 5.218-1.345 1.575-3.556 1.753-5.239.375-.906-.742-1.486-2.154-1.441-3.28ZM113.285 40.541c.012 2.276-1.055 3.848-2.688 4.391-2.093.697-4.278-.53-4.892-2.764-.378-1.378-.177-2.687.657-3.831 1.37-1.88 3.979-2.18 5.699-.526.9.867 1.184 1.935 1.224 2.73ZM146.767 38.162l-6.096 2.567c-.048-1.497.898-3.174 2.412-3.728 1.567-.572 2.928-.126 3.684 1.16ZM118.316 14.9c.105 1.816-1.556 3.94-3.649 3.754-1.395-.123-3.47-1.217-3.453-3.653.014-1.98 1.5-3.791 3.56-3.753 1.621.03 3.67 1.4 3.542 3.652Z" />
    </g>
  </svg>
);

export const MonthlyExpertPlan_Modal = (props) => (
  <div className="flex flex-col justify-center bg-bg p-4 lg:p-8 rounded-3xl">
    <p className="text-center text-secondary text-2xl lg:text-3xl font-bold pb-4">TRAIN REX</p>
    <p className="text-center text-tertiary text-2xl lg:text-3xl font-bold pb-8">Consultation Plans</p>

    <div className="flex flex-row gap-x-2 lg:gap-x-8 justify-between">
      <button className="flex flex-col bg-tertiary px-4 lg:px-8 py-4 rounded-2xl items-center">
        <p className="text-center text-primary text-[15px] lg:text-lg font-semibold">1 month</p>
        <p className="text-center text-secondary text-xl lg:text-2xl font-semibold">
          <span className="line-through decoration-red">7999</span>
        </p>
        <p className="text-center text-primary text-2xl lg:text-3xl font-semibold">6399</p>
      </button>
      <button className="flex flex-col bg-tertiary px-4 lg:px-8 py-4 rounded-2xl items-center">
        <p className="text-center text-primary text-[15px] lg:text-lg font-semibold">3 month</p>
        <p className="text-center text-secondary text-xl lg:text-2xl font-semibold">
          <span className="line-through decoration-red">19999</span>
        </p>
        <p className="text-center text-primary text-2xl lg:text-3xl font-semibold">15999</p>
      </button>
      <button className="flex flex-col bg-tertiary px-4 lg:px-8 py-4 rounded-2xl items-center">
        <p className="text-center text-primary text-[15px] lg:text-lg font-semibold">6 month</p>
        <p className="text-center text-secondary text-xl lg:text-2xl font-semibold">
          <span className="line-through decoration-red">34999</span>
        </p>
        <p className="text-center text-primary text-2xl lg:text-3xl font-semibold">27999</p>
      </button>
    </div>
    <div className="flex flex-row justify-center items-center py-8">
      <p className="text-center text-red text-3xl font-bold">FLAT 20%</p>
      <p className="text-center text-red text-sm font-bold pt-3">OFF</p>
    </div>

    <div className="flex mb-4 gap-x-1 justify-center">
      {/* First SVG */}
      <img src={match} alt="Match" className="h-6 lg:h-8" />
      {/* Second SVG */}
      <img src={track} alt="Track" className="h-6 lg:h-8" />
      {/* Third SVG */}
      <img src={consult} alt="Consult" className="h-6 lg:h-8" />
    </div>
  </div>
)
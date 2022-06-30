import React from "react";
import {
  Montserrat500white142,
  Montserrat500white14,
  Montserrat500white12,
} from "../General.elements";
import {
  ContentLinksAndFollow,
  ContentLinksAndFollow2,
  FollowUs,
  FooterBottom,
  FooterbottomLeft,
  FooterbottomRight,
  FooterContainer,
  FooterTop,
  FooterTopLeft,
  FooterTopRight,
  Infofooter,
  Infofooter2,
  LineBorder,
  Links,
  LogotipoManrayFooter,
  NothingContentdiv,
} from "./Footer.elements";
import manray_logofooter from "../../img/May/manray_footer.png";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterTop>
          <FooterTopLeft>
            <LogotipoManrayFooter urllogo={manray_logofooter} />
            <Infofooter>
              <Montserrat500white12
                style={{ fontWeight: "400", lineHeight: "1.2em" }}
              >
                <strong>INFORMACIÓN DE CONTACTO</strong>
                <br />
                <br />
                Entendemos tu idea y la llevamos al siguiente nivel, dejanos
                ayudarte
              </Montserrat500white12>
            </Infofooter>
            <Infofooter2>
              <Montserrat500white12
                style={{
                  fontWeight: "400",
                  lineHeight: "1.4em",
                }}
              >
                <strong>
                  <a
                    style={{
                      color: "#ffffff",
                    }}
                    href="tel:6142601345"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chihuahua 614 2601345
                  </a>
                  <br />
                  <a
                    style={{
                      color: "#ffffff",
                    }}
                    href="tel:6141319970"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Torreón 614 1319970
                  </a>

                  <br />
                  <a
                    style={{
                      color: "#ffffff",
                    }}
                    href="mailto:manrayfilmscuu@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    manrayfilmscuu@gmail.com
                  </a>
                </strong>
              </Montserrat500white12>
            </Infofooter2>
          </FooterTopLeft>
          <FooterTopRight>
            <ContentLinksAndFollow>
              <NothingContentdiv />
              <Links>
                <Montserrat500white12
                  style={{ fontWeight: "400", lineHeight: "1.2em" }}
                >
                  <strong>SÍGUENOS</strong>
                  <br />
                  <br />
                </Montserrat500white12>
                <ContentLinksAndFollow2>
                  <a
                    href="https://www.facebook.com/ManRayFilms"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.5607 10.315C19.5607 4.88137 15.1814 0.475586 9.78035 0.475586C4.37932 0.475586 0 4.88137 0 10.315C0 15.2259 3.57594 19.2966 8.25217 20.0354V13.1601H5.76822V10.315H8.25217V8.14726C8.25217 5.6817 9.71267 4.31867 11.9464 4.31867C13.0166 4.31867 14.1361 4.51107 14.1361 4.51107V6.93271H12.9022C11.688 6.93271 11.3081 7.69087 11.3081 8.47012V10.315H14.0204L13.5873 13.1601H11.3085V20.0363C15.9848 19.2979 19.5607 15.2273 19.5607 10.315Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/betomorenor"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      width="26"
                      height="21"
                      viewBox="0 0 26 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25.2369 2.79333C24.3197 3.19185 23.3493 3.45441 22.3563 3.5727C23.3999 2.96162 24.1847 1.99081 24.5635 0.842356C23.5769 1.41929 22.4992 1.82409 21.3768 2.03943C20.9041 1.54406 20.3356 1.14998 19.7059 0.881144C19.0762 0.612308 18.3984 0.474329 17.7137 0.475595C14.9416 0.475595 12.6983 2.68635 12.6983 5.4116C12.6963 5.79067 12.7397 6.16861 12.8276 6.53735C10.8398 6.44417 8.89337 5.93708 7.11277 5.04853C5.33217 4.15999 3.75664 2.90955 2.48699 1.37722C2.04157 2.12812 1.806 2.98488 1.80492 3.85795C1.80492 5.56951 2.69788 7.0824 4.04624 7.96874C3.24737 7.94978 2.46488 7.73835 1.76518 7.35238V7.41351C1.76518 9.80765 3.49711 11.7994 5.78938 12.2527C5.35832 12.3676 4.91412 12.4259 4.46801 12.4259C4.15147 12.4265 3.83564 12.3958 3.52513 12.3342C4.16238 14.2954 6.01707 15.7217 8.21408 15.7624C6.42886 17.1383 4.23707 17.8819 1.9832 17.8764C1.58314 17.8758 1.18344 17.852 0.786133 17.8051C3.079 19.2692 5.74427 20.0436 8.4647 20.0362C17.703 20.0362 22.7501 12.5125 22.7501 5.98721C22.7501 5.77327 22.7445 5.55932 22.7343 5.35047C23.7139 4.65365 24.5614 3.78771 25.2369 2.79333Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://vimeo.com/channels/manrayfilms/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      width="24"
                      height="21"
                      viewBox="0 0 24 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.1256 3.02181C22.8709 1.83032 22.2336 1.04635 21.0569 0.664814C19.8802 0.283273 17.7499 0.435583 16.2624 1.5201C14.8978 2.51394 13.906 4.29225 13.5117 5.50768C13.5001 5.54378 13.4988 5.5824 13.5079 5.6192C13.517 5.656 13.5363 5.68952 13.5634 5.71599C13.5906 5.74246 13.6246 5.76082 13.6616 5.76902C13.6986 5.77721 13.7372 5.77491 13.773 5.76238C14.3216 5.56881 14.8794 5.40071 15.505 5.43382C16.2691 5.47457 16.7535 6.0451 16.7739 6.72209C16.7892 7.22079 16.7637 7.67416 16.5905 8.13211C16.0434 9.59307 15.184 11.0082 14.1683 12.2455C14.0152 12.4296 13.8446 12.5983 13.6589 12.7493C13.1388 13.1716 12.7007 13.06 12.3645 12.4844C12.0894 12.0112 11.9061 11.5227 11.743 11.0031C11.1114 8.9823 10.8867 6.8851 10.5302 4.81286C10.3621 3.82055 10.1736 2.78697 9.61324 1.91641C9.02234 1.01019 8.15585 0.664304 7.06624 0.795729C6.31742 0.887421 5.18605 1.68667 4.6308 2.14004C4.6308 2.14004 1.77816 4.52759 0.462891 5.7746L1.54282 7.14998C1.54282 7.14998 2.45515 6.51374 2.94418 6.21829C3.23454 6.04561 3.57583 6.00995 3.82035 6.22848C4.05009 6.42715 4.30988 6.68694 4.44742 6.94673C4.73778 7.49128 5.01794 8.0613 5.19623 8.6466C5.86864 10.9017 6.49571 13.1619 7.12228 15.4328C7.4432 16.5932 7.83034 17.6828 8.5486 18.6701C9.53225 20.0246 10.5663 20.3348 12.1613 19.7648C13.4556 19.3017 14.5356 18.4312 15.5233 17.53C17.2099 15.9927 18.5349 14.2006 19.8797 12.378C20.9194 10.9684 21.7803 9.54213 22.4985 7.94872C23.2071 6.3706 23.4873 4.71607 23.1256 3.02181Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </ContentLinksAndFollow2>
              </Links>
              <FollowUs>
                <Montserrat500white12
                  style={{ fontWeight: "400", lineHeight: "1.3em" }}
                >
                  <strong>LINKS</strong>
                  <br />
                  <br />
                  <a
                    style={{ color: "#ffffff" }}
                    href="https://manrayfilms.com/AvisodePrivacidad-Manray.pdf"
                  >
                    Aviso de privacidad
                  </a>
                </Montserrat500white12>
              </FollowUs>
            </ContentLinksAndFollow>
          </FooterTopRight>
        </FooterTop>
        <LineBorder />
        <FooterBottom>
          <FooterbottomLeft>
            <Montserrat500white14>
              2022 Manray. Todos los derechos reservados.
              {/* eslint-disable-next-line */}
              <a
                style={{ color: "#ffffff" }}
                href="https://manrayfilms.com/AvisodePrivacidad-Manray.pdf"
              >
                Aviso de privacidad
              </a>
            </Montserrat500white14>
          </FooterbottomLeft>
          <FooterbottomRight>
            <Montserrat500white142>
              <Montserrat500white14>
                {" "}
                Hecho por{" "}
                <a
                  href="https://ingenieriadigital.mx"
                  style={{ color: "#ffffff" }}
                >
                  {" "}
                  Ingeniería Digital
                </a>
              </Montserrat500white14>
              <svg
                style={{ marginLeft: "10px" }}
                width="73"
                height="27"
                viewBox="0 0 73 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_748_1699)">
                  <path
                    d="M4.48584 26.9033C6.96095 26.9033 8.96973 24.8945 8.96973 22.4194V17.9355H4.48584C2.01074 17.9355 0.00195312 19.9443 0.00195312 22.4194C0.00195312 24.8945 2.01074 26.9033 4.48584 26.9033Z"
                    fill="white"
                  />
                  <path
                    d="M0.00195312 13.4517C0.00195312 10.9766 2.01074 8.96777 4.48584 8.96777H8.96973V17.9355H4.48584C2.01074 17.9355 0.00195312 15.9268 0.00195312 13.4517Z"
                    fill="white"
                  />
                  <path
                    d="M0.00195312 4.48391C0.00195312 2.00879 2.01074 0 4.48584 0H8.96973V8.96782H4.48584C2.01074 8.96782 0.00195312 6.95903 0.00195312 4.48391Z"
                    fill="white"
                  />
                  <path
                    d="M8.96973 0H13.4537C15.9288 0 17.9376 2.00879 17.9376 4.48391C17.9376 6.95903 15.9288 8.96782 13.4537 8.96782H8.96973V0Z"
                    fill="white"
                  />
                  <path
                    d="M17.9376 13.4517C17.9376 15.9268 15.9288 17.9355 13.4537 17.9355C10.9785 17.9355 8.96973 15.9268 8.96973 13.4517C8.96973 10.9766 10.9785 8.96777 13.4537 8.96777C15.9288 8.96777 17.9376 10.9766 17.9376 13.4517Z"
                    fill="white"
                  />
                </g>
                <g clipPath="url(#clip1_748_1699)">
                  <path
                    d="M69.7895 14.2121C69.5476 13.8985 69.2851 13.5847 69.0045 13.2722C69.1974 13.0484 69.3811 12.8242 69.5541 12.6C71.3414 10.2824 71.8489 8.18002 70.983 6.6802C70.1171 5.18034 68.0428 4.56865 65.1418 4.9578C64.836 4.99884 64.5238 5.05086 64.2066 5.11266C64.0987 4.79712 63.9844 4.49146 63.8634 4.19741C62.75 1.49067 61.183 0 59.4512 0C57.7193 0 56.1523 1.49067 55.0389 4.19741C54.918 4.49146 54.8037 4.79712 54.6958 5.11266C54.3786 5.05092 54.0664 4.99884 53.7606 4.9578C50.8599 4.5687 48.7854 5.18034 47.9194 6.6802C47.0535 8.18007 47.5609 10.2824 49.3483 12.6C49.5212 12.8242 49.705 13.0484 49.8979 13.2722C49.6173 13.5847 49.3548 13.8984 49.1129 14.2121C47.3255 16.5297 46.818 18.6321 47.684 20.1319C48.3797 21.337 49.8552 21.9687 51.9131 21.9687C52.4164 21.9687 52.955 21.9308 53.5251 21.8543C53.8923 21.805 54.2686 21.7401 54.652 21.661C54.7726 22.0227 54.9015 22.3719 55.0389 22.7061C56.1523 25.4128 57.7193 26.9035 59.4512 26.9035C61.183 26.9035 62.75 25.4128 63.8634 22.7061C64.0009 22.3719 64.1297 22.0227 64.2503 21.661C64.6337 21.74 65.01 21.805 65.3772 21.8543C65.9475 21.9308 66.4858 21.9686 66.9893 21.9686C69.0469 21.9686 70.5227 21.3369 71.2184 20.1319C72.0844 18.6321 71.5769 16.5297 69.7895 14.2121ZM66.7627 6.41721C68.2036 6.41721 69.2221 6.78298 69.6178 7.46834C70.1356 8.36519 69.6574 9.88471 68.3058 11.6373C68.177 11.8043 68.0414 11.9714 67.9001 12.1384C67.1099 11.3866 66.2203 10.6509 65.2525 9.94987C65.1189 8.78246 64.9179 7.66691 64.655 6.62971C65.4266 6.48731 66.1351 6.41721 66.7627 6.41721ZM61.5438 17.2346C60.8352 17.6437 60.1359 18.0107 59.4516 18.337C58.767 18.0106 58.0675 17.6439 57.3585 17.2346C56.5764 16.783 55.8279 16.3051 55.1217 15.8086C55.0624 15.0546 55.0304 14.2678 55.0304 13.4517C55.0304 12.5375 55.0705 11.66 55.1443 10.8243C55.774 10.3919 56.4355 9.97451 57.123 9.57753C57.9133 9.12127 58.6919 8.71804 59.4511 8.36456C60.2104 8.71804 60.989 9.12127 61.7793 9.57753C62.4669 9.97451 63.1283 10.3919 63.758 10.8243C63.8318 11.66 63.8719 12.5375 63.8719 13.4517C63.8719 14.2678 63.8398 15.0546 63.7806 15.8086C63.0745 16.3051 62.326 16.783 61.5438 17.2346ZM63.5401 17.8658C63.4345 18.5368 63.3064 19.1724 63.1593 19.7681C62.5746 19.5982 61.9654 19.3926 61.3371 19.1504C61.6695 18.9739 62.0015 18.7906 62.332 18.5998C62.7436 18.3621 63.1465 18.117 63.5401 17.8658ZM57.5651 19.1504C56.9367 19.3926 56.3277 19.598 55.743 19.7678C55.5959 19.1723 55.4678 18.5368 55.3622 17.8658C55.7558 18.117 56.1586 18.3621 56.5703 18.5998C56.9008 18.7906 57.2327 18.9739 57.5651 19.1504ZM53.4732 14.5523C52.9741 14.1387 52.5063 13.7174 52.0748 13.2922C52.5121 12.8751 52.9834 12.4626 53.4846 12.0582C53.4645 12.5182 53.454 12.9831 53.454 13.4517C53.454 13.8211 53.4607 14.1881 53.4732 14.5523ZM55.4058 8.77032C55.5118 8.14224 55.6377 7.54689 55.7803 6.98765C56.3404 7.14418 56.9241 7.33419 57.5263 7.55809C57.1281 7.76591 56.7305 7.98397 56.3349 8.21239C56.0199 8.3942 55.7103 8.58047 55.4058 8.77032ZM61.376 7.55803C61.9782 7.33414 62.5619 7.14408 63.122 6.9876C63.2647 7.5469 63.3906 8.14224 63.4966 8.77032C63.1921 8.58047 62.8824 8.3942 62.5675 8.21239C62.1718 7.98392 61.7742 7.76585 61.376 7.55803ZM65.4177 12.0582C65.919 12.4626 66.3902 12.8751 66.8276 13.2922C66.396 13.7174 65.9283 14.1387 65.4291 14.5523C65.4417 14.1881 65.4483 13.8211 65.4483 13.4517C65.4483 12.9831 65.4378 12.5182 65.4177 12.0582ZM59.4512 1.57637C60.5914 1.57637 61.8025 3.0268 62.6683 5.48037C61.6252 5.77353 60.5439 6.16221 59.4512 6.63733C58.3584 6.16221 57.2771 5.77358 56.2341 5.48037C57.0998 3.0268 58.311 1.57637 59.4512 1.57637ZM49.2846 7.46839C49.6803 6.78293 50.6983 6.41726 52.1396 6.41726C52.7672 6.41726 53.4757 6.48736 54.2473 6.62981C53.9845 7.66701 53.7835 8.78256 53.6498 9.94992C52.6821 10.651 51.7925 11.3866 51.0023 12.1385C50.861 11.9714 50.7254 11.8043 50.5966 11.6373C49.245 9.88476 48.7668 8.36524 49.2846 7.46839ZM51.9042 20.3949C50.4633 20.3948 49.4448 20.0291 49.0491 19.3438C48.5313 18.4469 49.0095 16.9274 50.3611 15.1748C50.5537 14.9251 50.7607 14.6751 50.9808 14.4255C51.7621 15.1936 52.6489 15.947 53.6185 16.6665C53.7461 17.889 53.9465 19.0584 54.2145 20.1438C53.3638 20.3125 52.5864 20.3949 51.9042 20.3949ZM59.4512 25.3271C58.2889 25.3271 57.0529 23.8196 56.1842 21.2789C57.2449 20.9706 58.3432 20.5645 59.4512 20.071C60.5591 20.5645 61.6574 20.9706 62.7181 21.2789C61.8494 23.8196 60.6135 25.3271 59.4512 25.3271ZM69.8532 19.3438C69.2702 20.3537 67.3359 20.669 64.6878 20.1438C64.9558 19.0584 65.1562 17.889 65.2838 16.6665C66.2534 15.947 67.1403 15.1936 67.9215 14.4255C68.1416 14.6751 68.3486 14.9251 68.5412 15.1748C69.8929 16.9274 70.3711 18.4469 69.8532 19.3438Z"
                    fill="white"
                  />
                  <path
                    d="M59.4511 15.8876C60.7962 15.8876 61.8866 14.7972 61.8866 13.4521C61.8866 12.107 60.7962 11.0166 59.4511 11.0166C58.106 11.0166 57.0156 12.107 57.0156 13.4521C57.0156 14.7972 58.106 15.8876 59.4511 15.8876Z"
                    fill="white"
                  />
                </g>
                <path
                  d="M35.3555 12.6611V13.8506H28.5332V12.6611H35.3555ZM32.5801 9.75586V17.002H31.3154V9.75586H32.5801Z"
                  fill="white"
                />
                <defs>
                  <clipPath id="clip0_748_1699">
                    <rect width="17.9392" height="26.9035" fill="white" />
                  </clipPath>
                  <clipPath id="clip1_748_1699">
                    <rect
                      width="26.9035"
                      height="26.9035"
                      fill="white"
                      transform="translate(46)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Montserrat500white142>
          </FooterbottomRight>
        </FooterBottom>
      </FooterContainer>
    </>
  );
};

export default Footer;

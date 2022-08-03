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
                    href="https://www.instagram.com/manrayfilmsco/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.5 1.71224C12.0371 1.71224 12.3366 1.71224 13.338 1.76812C13.941 1.77429 14.5385 1.8847 15.1039 2.09447C15.5161 2.24689 15.8888 2.48979 16.1947 2.80529C16.5102 3.1112 16.7531 3.48395 16.9055 3.89612C17.1153 4.46153 17.2257 5.05896 17.2319 5.662C17.2788 6.66341 17.2878 6.96294 17.2878 9.5C17.2878 12.0371 17.2878 12.3366 17.2319 13.338C17.2257 13.941 17.1153 14.5385 16.9055 15.1039C16.747 15.513 16.505 15.8845 16.1947 16.1947C15.8845 16.505 15.513 16.747 15.1039 16.9055C14.5385 17.1153 13.941 17.2257 13.338 17.2319C12.3366 17.2788 12.0371 17.2878 9.5 17.2878C6.96294 17.2878 6.66341 17.2878 5.662 17.2319C5.05896 17.2257 4.46153 17.1153 3.89612 16.9055C3.48395 16.7531 3.1112 16.5102 2.80529 16.1947C2.48979 15.8888 2.24689 15.5161 2.09447 15.1039C1.8847 14.5385 1.77429 13.941 1.76812 13.338C1.72118 12.3366 1.71224 12.0371 1.71224 9.5C1.71224 6.96294 1.71224 6.66341 1.76812 5.662C1.77429 5.05896 1.8847 4.46153 2.09447 3.89612C2.24689 3.48395 2.48979 3.1112 2.80529 2.80529C3.1112 2.48979 3.48395 2.24689 3.89612 2.09447C4.46153 1.8847 5.05896 1.77429 5.662 1.76812C6.66341 1.72118 6.96294 1.71224 9.5 1.71224ZM9.5 0C6.92941 0 6.59635 0.0111765 5.58824 0.0581176C4.79945 0.0747271 4.0193 0.22592 3.28141 0.505176C2.64992 0.747602 2.07611 1.11943 1.59684 1.59677C1.11757 2.07412 0.743435 2.64643 0.498471 3.27694C0.221004 4.01664 0.0720731 4.79833 0.0581176 5.58824C0.0111765 6.59635 0 6.92941 0 9.5C0 12.0706 0.0111765 12.4036 0.0581176 13.4118C0.0747271 14.2005 0.22592 14.9807 0.505176 15.7186C0.747602 16.3501 1.11943 16.9239 1.59677 17.4032C2.07412 17.8824 2.64643 18.2566 3.27694 18.5015C4.01482 18.7808 4.79498 18.932 5.58376 18.9486C6.59635 19 6.92941 19 9.5 19C12.0706 19 12.4059 19 13.4162 18.9419C14.205 18.9253 14.9852 18.7741 15.7231 18.4948C16.3537 18.2519 16.9267 17.8798 17.4051 17.4025C17.8836 16.9252 18.2571 16.3531 18.5015 15.7231C18.7808 14.9852 18.932 14.205 18.9486 13.4162C19 12.4036 19 12.0706 19 9.5C19 6.92941 19 6.59412 18.9419 5.58376C18.9253 4.79498 18.7741 4.01482 18.4948 3.27694C18.2519 2.64627 17.8798 2.07333 17.4025 1.59486C16.9252 1.11639 16.3531 0.742942 15.7231 0.498471C14.9834 0.221004 14.2017 0.0720731 13.4118 0.0581176C12.4036 0.0111765 12.0706 0 9.5 0Z"
                        fill="white"
                      />
                      <path
                        d="M9.49997 4.62207C8.53531 4.62207 7.59231 4.90813 6.79023 5.44406C5.98814 5.98 5.36299 6.74175 4.99383 7.63298C4.62467 8.52421 4.52808 9.50489 4.71628 10.451C4.90447 11.3971 5.369 12.2662 6.05112 12.9483C6.73324 13.6305 7.60231 14.095 8.54844 14.2832C9.49456 14.4714 10.4752 14.3748 11.3665 14.0056C12.2577 13.6365 13.0195 13.0113 13.5554 12.2092C14.0913 11.4071 14.3774 10.4641 14.3774 9.49948C14.3774 8.20591 13.8635 6.96532 12.9488 6.05063C12.0341 5.13594 10.7935 4.62207 9.49997 4.62207ZM9.49997 12.6691C8.87361 12.6691 8.26131 12.4834 7.74048 12.1355C7.21966 11.7875 6.81368 11.293 6.57388 10.7143C6.33408 10.1357 6.27122 9.49896 6.39326 8.88461C6.51529 8.27025 6.81674 7.70587 7.25949 7.26281C7.70223 6.81975 8.2664 6.51791 8.88067 6.39544C9.49494 6.27297 10.1317 6.33538 10.7105 6.57477C11.2893 6.81416 11.7842 7.21979 12.1325 7.74037C12.4808 8.26096 12.6669 8.87312 12.6674 9.49948C12.6668 10.3394 12.3329 11.1446 11.739 11.7385C11.1451 12.3324 10.3398 12.6663 9.49997 12.6669V12.6691Z"
                        fill="white"
                      />
                      <path
                        d="M14.5719 5.56809C15.2015 5.56809 15.7119 5.05769 15.7119 4.42809C15.7119 3.79848 15.2015 3.28809 14.5719 3.28809C13.9423 3.28809 13.4319 3.79848 13.4319 4.42809C13.4319 5.05769 13.9423 5.56809 14.5719 5.56809Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UC8vnvHN6_TqiOAjl-xdUCog"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      width="26"
                      height="19"
                      viewBox="0 0 26 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25.4569 2.84267C25.3088 2.28831 25.0171 1.78279 24.6114 1.37705C24.2057 0.971305 23.7001 0.679679 23.1458 0.531556C21.1293 0 13 0 13 0C13 0 4.87067 0 2.84267 0.543111C2.28831 0.691235 1.78279 0.982861 1.37705 1.3886C0.971305 1.79434 0.679679 2.29987 0.531556 2.85422C0 4.87067 0 9.1 0 9.1C0 9.1 0 13.3293 0.543111 15.3573C0.691235 15.9117 0.982861 16.4172 1.3886 16.823C1.79434 17.2287 2.29987 17.5203 2.85422 17.6684C4.87067 18.2 13 18.2 13 18.2C13 18.2 21.1293 18.2 23.1573 17.6569C23.7117 17.5088 24.2172 17.2171 24.623 16.8114C25.0287 16.4057 25.3203 15.9001 25.4684 15.3458C26 13.3293 26 9.1 26 9.1C26 9.1 26 4.87067 25.4569 2.84267ZM10.4 13V5.2L17.1542 9.1L10.4 13Z"
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

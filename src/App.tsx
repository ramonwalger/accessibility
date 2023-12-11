// import { AccessibilityIcon } from './components/AccessibilityItem/AccessibilityIcon'
import { AccessibilityItem } from './components/AccessibilityItem'
import {
  ContrastIcon,
  SepiaIcon,
  VisibilityIcon,
  MonochromeIcon,
  InvertColorIcon,
  LowerSaturationIcon,
  HighSaturationIcon,
  HighlightTitleIcon,
  HighlightLinkIcon,
  FontBolderIcon,
  FontSizeIcon,
  ZoomIcon,
  ResetIcon,
  ApplyIcon,
} from './components/icons'

import './styles.scss'

export function App() {
  // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  //   useEffect(() => {
  //     let accessibilityActivesDisplay: string[] = [];
  //     let accessibilityActivesText: string[] = [];

  //     const accessibilityCacheDisplay = localStorage.setItem("accessibilityDisplay", 'true');
  //     const accessibilityCacheText = localStorage.setItem("accessibilityText", "true")

  //     const displayItems = accessibilityCacheDisplay.getItems();
  //     if (displayItems) {
  //       displayItems.forEach((item: string) => {
  //         document.querySelectorAll(`.accessibility-item[handlerdisplay=${item}]`).forEach(element => {
  //           element.classList.add("selected");
  //         });
  //         document.documentElement.setAttribute("acc-display", item);
  //       });
  //     }

  //     const textItems = accessibilityCacheText.getItems();
  //     if (textItems) {
  //       textItems.forEach((item: string) => {
  //         document.querySelectorAll(`.accessibility-item[handlerdisplay=${item}]`).forEach(element => {
  //           element.classList.add("selected");
  //         });
  //         document.documentElement.classList.add(item);
  //       });
  //     }

  //     if (displayItems) {
  //       accessibilityActivesDisplay = [...accessibilityActivesDisplay, ...displayItems];
  //     }

  //     if (textItems) {
  //       accessibilityActivesText = [...accessibilityActivesText, ...textItems];
  //     }

  //     const qtdActive = accessibilityActivesDisplay.length + accessibilityActivesText.length;
  //     if (qtdActive > 0) {
  //       const qtdActiveElement = document.querySelector(".accessibility-qtdActive");
  //       if (qtdActiveElement) {
  //         qtdActiveElement.textContent = qtdActive.toString();
  //         qtdActiveElement.classList.add("visible");
  //       }
  //     }

  //     const accZoomStyle = document.createElement("style");
  //     accZoomStyle.id = "acc-zoom-style";
  //     document.body.appendChild(accZoomStyle);

  //     // Check if it does not exceed the height of the viewport
  //     if (!isMobile) {
  //       const modalAccessibility = document.querySelector(".accessibility-options");
  //       const heightModalAccessibility = modalAccessibility?.offsetHeight + 111;

  //       if (heightModalAccessibility > window.innerHeight) {
  //         modalAccessibility?.style.height = `${modalAccessibility?.offsetHeight - 100}px`;
  //       }
  //     }
  //   }, [])

  return (
    <div className="accessibility">
      <div className="accessibility-icon">
        {/* <AccessibilityIcon icon={AccessibilityIcon} /> */}
        <span className="accessibility-qtdActive"></span>
      </div>
      <div className="accessibility-options opened">
        <div className="accessibility-options__content">
          <ul className="accessibility-items">
            <AccessibilityItem.Root>
              <AccessibilityItem.Icon icon={VisibilityIcon} />
              <AccessibilityItem.Title title={'Visibilidade'} />
            </AccessibilityItem.Root>

            <AccessibilityItem.Root>
              <AccessibilityItem.Icon icon={SepiaIcon} />
              <AccessibilityItem.Title title={'Sépia'} />
            </AccessibilityItem.Root>

            <AccessibilityItem.Root>
              <AccessibilityItem.Icon icon={ContrastIcon} />
              <AccessibilityItem.Title title={'Contraste'} />
            </AccessibilityItem.Root>

            <AccessibilityItem.Root>
              <AccessibilityItem.Icon icon={MonochromeIcon} />
              <AccessibilityItem.Title title={'Monocromático'} />
            </AccessibilityItem.Root>

            <AccessibilityItem.Root>
              <AccessibilityItem.Icon icon={InvertColorIcon} />
              <AccessibilityItem.Title title={'Inverter Cores'} />
            </AccessibilityItem.Root>

            <AccessibilityItem.Root>
              <AccessibilityItem.Icon icon={LowerSaturationIcon} />
              <AccessibilityItem.Title title={'Baixa Saturação'} />
            </AccessibilityItem.Root>

            <AccessibilityItem.Root>
              <AccessibilityItem.Icon icon={HighSaturationIcon} />
              <AccessibilityItem.Title title={'Alta Saturação'} />
            </AccessibilityItem.Root>

            <AccessibilityItem.Root>
              <AccessibilityItem.Icon icon={HighlightTitleIcon} />
              <AccessibilityItem.Title title={'Destacar Títulos'} />
            </AccessibilityItem.Root>

            <AccessibilityItem.Root>
              <AccessibilityItem.Icon icon={HighlightLinkIcon} />
              <AccessibilityItem.Title title={'Destacar Links'} />
            </AccessibilityItem.Root>

            <AccessibilityItem.Root>
              <AccessibilityItem.Icon icon={FontBolderIcon} />
              <AccessibilityItem.Title title={'Texto Negrito'} />
            </AccessibilityItem.Root>
          </ul>

          <ul className="accessibility-items">
            <AccessibilityItem.Root>
              <AccessibilityItem.Icon icon={ZoomIcon} />
              <AccessibilityItem.Title title={'Zoom'} />

              <div className="jb-buttons jb-zoom__buttons">
                <div className="jb-percent__current jb-zoom__current"></div>
                <div className="jb-buttons__minus jb-zoom__minus">-</div>
                <div className="jb-buttons__plus jb-zoom__plus">+</div>
              </div>
            </AccessibilityItem.Root>

            <AccessibilityItem.Root>
              <AccessibilityItem.Icon icon={FontSizeIcon} />
              <AccessibilityItem.Title title={'Tamanho da Fonte'} />

              <div className="jb-buttons jb-fontSize__buttons">
                <div className="jb-percent__current jb-fontSize__current"></div>
                <div className="jb-buttons__minus jb-fontSize__minus">-</div>
                <div className="jb-buttons__plus jb-fontSize__plus">+</div>
              </div>
            </AccessibilityItem.Root>
          </ul>
        </div>

        <div className="accessibility-options__navbar">
          <div className="accessibility-reset">
            <AccessibilityItem.Icon icon={ResetIcon} />
            <AccessibilityItem.Title title={'Redefinir'} />
          </div>

          <div className="accessibility-apply">
            <AccessibilityItem.Icon icon={ApplyIcon} />
            <AccessibilityItem.Title title={'Aplicar'} />
          </div>

          <div className="accessibility-options__footer">
            <p className="accessibility-title">Acessibilidade</p>
            <div className="accessibility-close">
              Fechar
              <svg className="icon icon-close">
                <use
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xlinkHref="#icon-close"
                >
                  Fechar
                </use>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

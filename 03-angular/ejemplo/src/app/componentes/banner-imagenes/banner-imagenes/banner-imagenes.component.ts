import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-banner-imagenes',
  templateUrl: './banner-imagenes.component.html',
  styleUrls: ['./banner-imagenes.component.scss']
})
export class BannerImagenesComponent implements OnInit {
  nombre='Lesly';
  apellido='Tipanluiza'
  mascotas = {
    cachetes: {
      edad:7
    }
  }
  fecha = new Date();
  sueldo = 1000;

  @Input()
  url = 'https://www.google.com'

  @Input()
  urlImagen = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFRUZGBgaGBoaGhgaHBoYGhoaGhgaGhoYGhgcIS4lHCErIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzQrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAL4BCQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAQIDBQYABwj/xAA7EAACAQIDBAcGBQMEAwAAAAABAgADEQQSIQUxQVEGEyJhcYGRFFKhsdHwBzJCweEWkvFTYnKCFTND/8QAGgEAAwEBAQEAAAAAAAAAAAAAAQIDAAQFBv/EACQRAAMAAgICAQUBAQAAAAAAAAABAgMREiEEMUEFEyIyUWFC/9oADAMBAAIRAxEAPwD1xjK/G4kCOxeJsJlNsbR3gTowS6Z5Hl5uEtkG1do3uAZR1K14ytVvIQbz2YcRJ8+93XJ+xxa8jYQujg2bhaF/+JaJXnYo6bOmPFy13MspyIgMs62y2G6AVqRXeLR8fm47/VhvDkn9p0Rl40vOMjZpd2mTSFLxjVIx3kL1Zz5MiRSYHu8jUXPdGg3is9t08fyfL74yex4XgPI+VLoWpVtoJEpJipTvCUpzza/p9RhxzC0kMiKskKRypIVR3TJyJJ1WNVY8xdlkhRHqZFecTGEpD2eRmoJE7yB6nfBoQNWrJUcSp67vk9KtA5CWd41jIUeOYwBGs8hZhEcyBoUZhKmc7QcPOzwtDSxtVZBlMMteJ1cCbNWNU9np+PrEzL4+mzGaevT0ldXw06Y85z6Pl8301ZPZmvZTDsHhNYf7L3QrDULGTz/Ur17Bi+lRL9E2GwwAhLAcItrSMmfMeR5+S60mevi8WJXoY6A8JXY3Cgg6S1kFZI/iedli12Jm8SKnTRisdhSp09JXveafaWGJ3CUzbOcz6/F52Vwmjx6+l4t/wrGBkDWG+Wp2a/2YHidnON4MN+Tlr2Vw/TsMve9gntHAQqjTvI6eBN9Zb4bCzmdJdnqY8fFaRDToyXq4aMP3Rj0DJO0zqjoCYRJO1AxOpMV6LzREIhkwoGI1EwdB5MgBiMZI9IyNkMYDewaq0rsTVtLCqsrcWkM+ydb10CCvrDcLWMr8sMwq6ytJaJzT2XCVJMGkFOnC0pzn6LpkDSErLA0I04aDYxXlYqpDBho72eHZiALHWk3Umd1JmQ2z0saxr0hFRorvPC8XNTk4WuwV6NpyLac9SRipGz3XEpMkrmMETNG5p5OmUUj7xjuALnQSOpVA1O7jMztfbFtx8By/mev9M8L71c69I5/Iy8Fr5YbtHHKNL2+f8Siq7R10MzOP2qxbUwd9oaT6mFMLUo817rumapMQx43jnquNxPhMrQ2iVN72ltR2srcREqqXwPMy/kvMPjFOjr5jQ+m4yyoopF0Nx8fSZotmFxI8NtRqb6HdJOVk/wAZ0Tbj/Ua/LGMkjwmPSoOTfA/SSubTjuKl9nVNzS2iEpGFJIzSMmadsqmIBOKiIWnZpTQWyF1g1QSeo8HducbRt9AlQStxYlixlfi90M+xafRWsIZgoGxheDbWWpfiRl9lzTh1GV1NoZQec2iyYWFjikarR+eKyioTJO6ud1k7rJtM2xMs7q47PEzw9m2bNHiVakG62Ru5M8rD4jhHG8ibFepcxgaMtOCx6xMoskkoqTjUkMY7TlrxdvaGWVAG28URlQcbk+AmF2pjLkzU4ly9Spf9Kqo8xczLbYwYsWHmP3n0Hh8cUKPk4M01dOjP4l77/wCIiLEK3Npa4LBaC4852ValEpjk9FXWp3G+Chip0M0WL2bcaad8oK9MqbGUxWqQmWHPsttm7UIsrG8KxtTjzmYvL2k4amCTu/xaCoSe0GbbWmWGzNoWMva2OqWDIcw906/G+kydSwF1hOy8ab5SdDFcKvaNzcPpmpwm1lfRrI3In94dnmBxFdqbkHUb/u02PR3FGuQirduZYL8xaTrx9dyXx+X8WFGNLcJtK/RRUQHN2ra33X5aWmZrYSx/Mt+V9ZN4qOifIh/JVuZA5htSmOcgamPeE32qC/In+gDQDFiXDUgeI9ZDWwl4VjafoV5k10zOMusJw41hjYLWSJhrR6a0CX3scjQyk8GSnJ0Sc7RZWEGtF62RFI0pF0h+RKas7rJAUM4KYdIPIIFWd1siCzskxuRu8gi9WICcXOONg4nk8w3IJwpiA+2d8X2wRXCYVkC3SC1xpGHFyCridIrxoecnZnsftBUYgAdonMTvOU2tr8pWbTqhkuuoIlft6nnrOp13kabtQeHd84HhqjdpW3A6a3tfW2bjOtYU5VIZZO3INhKV313fdpfipbheVmzE7bE8PrCsbjgBlXeYaTqtDw1Mth61gRa0rcfskPqDIfaGQpmZVV1U5yHewYEglV7gNBff3aSYfaTOCMouFDaHQ30trxjLDcPaJPNF9Mz2JwrI1iJb08AOoLA6lfkf4kmLwuezNpJn7OGtuuSPUyzptJfJFTxb/hVu/ZsYPhq+Vr34xjHTfImWVmdE6ezT18M1dEKLmfcbXJ5aDlPX+gHRUYZM7i7sBv4DfaeHdH9pPRqo6tYq6m/DfrfutPqWmQQCN1tPCauuhECbXQGk9+W+154/tuyk3c+hPza09jxzdgi19J5D0npsGayKNeC3P97n5WgkVvsyj44i9jp3/tGrjb7zKrHYg5tTrfz87wcVzGbG0XwxZ5yantBhzmfp4gw6jiuYEINNei9TaJI11klLHrfUfP5SoGIXgIujjQ2MSomhpyVPyaimisLqQRJlw8x+Cx703sD67vObDAY0OtxoRvE5cuJz2jqjPv2c1GRNShxeMacxf7oEKUXqoWALxQJtmWUGWhH9VCVi3mG+6gRsXE9r75SHERDXlOJ5XIvBipwxUojiTO9og4h5F57V3xrYqU4xPfO9o75uIVTAdv8A/tB94Dy00PwnHAMgu7EkqD6iSY3Dmq9NF3sQvmWt8NJodt4Kz24Df5S874pI7IpbTf8ADLbPNgx5mAY2iQ2YC4lhTIzEbtfrJinmIqrjRZ41UlcuLDIEdM1hlDXIYC9wtxa4GtgQbXkuCwvJcq3ueZPeZZUKQtuklhyjVn3+KJT4yn8mB4+oAMsr9pVwERL/AO4+e75/CSbSqdvw+XH0tKPE187Fufy4CWxz0mRy13pHO4MZI5150ejn9hdGfVmAa9KmbWuimx3/AJRpPmXorsl8TiEpIL3OYnki6sfvmJ9PKAqgAaAADykqZkis27iMiMdbW4XHxG6eK9KceGJtSZd/aJzg+B/metdK/wD1MQ1j4Zr89N/feeL7c0JKggm92BzBh3g7oZ9Aa/IylVtdfpGrUnVzrut4afCRkwMronRrwlHtK5Wkq1jCBoslqyahiNZWo14ZQEIjQXXFxmhGzNolDofLnIV3Suz5X3wtbFk9Bw2KDqGBkhqTNbJxdjbnLhqs87LPGtFVfQcKk7PAOunGvJbQ3MsBVndfK3r47rZto3IpQ8UmQo8fmjcmS0LmiXiXnEwcmAephSUx9/W4EFpctPG0LSpf3QBxNzb0NvIRp7M2ajojs4O4fLpTBbNmB7VrAWBPMnygfSvaKIWUEFjv7hL/AKFVFKVVGa5UbwQDa+o9Rxv4TzDpPTelXcHVWcsDpcAm9p2xCcpBm6XZ3Xp3E/ekPw66XuZl8MrPUFuevhNdh6Wnh9+cjmhT1s9LBldLtDiYzPzi1nZTv0P3uidSSQN9yJKZRWq6ZZJsYNQqMqEu1Kpdt5F1NwJ5sRPpGhhQqKCv6QDuPCx8p4l012A2FxLKAerfto3AqdSvip09Oc68f4vTPNvvtGZHhJqdIsQALkkAAbyToNIRg8C9RgiIzMSAABcnwnr/AEI/DwUGWvibF1N1p6EKRuJPEjfKVSQqkO/DPok2EVqtYWq1AFy78i77HvJ+U3tVrKZCj6xmIe5Akk2wvWwLG4YVEZG3MN/EHgR3ieIdIcPZmFtxIJ3G4JBuDu8DznveTSYHpxgVAzqgzZrk89wufhGnoRo8WxNJgdQbcDv0g5Etsa4ubfTyla674zHRDOEQxITMnpvaG4erK1TJqTGHYutl3TqXgWLTtybDG9pBiKnaPjMLrRZYQZbNwtL4NcAzPK5VBLihV7I8Jx+WuloXYQZG7xS8gdp5qdbG2T0zCLwOk0nzxXTCmUaSQGQBpKrTu0DoeTFBjSwiExGgkgf4wqlUAsTw4cuOned5PDxgAfWPNTn3xpbQrRp+je2Oqqh23Now1/Kfmb87yTpVs6lXOdKqEa72FxzFt95lus08/wDH7xy124njLTlaWjTtMKwuwitmRlf/AInUf9TrLBnyaE+VuPO/lKVapB3mEptF+DMLE21Og+zM2q7ZeM7la0GUcG7OXZSqg6E3A+Pymn6K7ORqod2BykEDcL30PfwmV/8AIO4Idyygki5JseFr8Zb7DxYVt/I2G/wlIlb7EyeVTnSWj16rh1de+2hmZ25sNMRTalVF9cyMNGVuYPw85b7L2mGQd1gLd3fCMWA4uOBt+8tck8V96ZVdGNiUsMihEUPYZmtrfXideJ9ZoFQESrw9wYejyaRaqHBdYNXFmhDnWQY48Y2hE+zla4tAdo7NWqhRhcEWhWHeEK8OzPZ5Ftz8PXF2TXXzNzM/iOg2JAPYJ8J72xkVVNI2wdnzbiNgOl8/ZOoF+YlXUo2nq/TxVVjdd41INr25i2s8uxBFzaEyewVUhFOnGIsudm4FnIsCb6CwvfhMOiOkmVc0AC5nsN5M9WwnQ7sBXGu8+m6TYfoCiuHJ0GtvrJrJva0M4122YfaWDsi8wOPEWAPzHr3RqVLATQYnZL1cSqKLrc+Q3ft8ZQY7DMjFSNQZPKn1sjaXtD+ujOsgmYx4acdQhUHU3k+aV6VJJ1sjwCBKI9YPnj1edykVsmnRnWTusmchTFY6xRGs8TNBxNyJUMeRIkeL1kZSDY+0W0YrxS03ExIpt8IThsRlN7XPfw8oFmkiNHQrNHgNtVFI7R5fwBw8p6P0fxb1KBZtAXsOZsNT8fhPKdj4V6tRUUXZjYfU9wFzPYaFAUqaUlN8i2vuud5PmbynJ60x8c7ewvDpCCJDQaS1H0hfSKP2cDBca43RyvfQSDEUyTrp9Jn2hV0+yBHtJ1rSDqTw18NYmQxeym0F9dGPXFoK9NxwkTI3GDZugTbex6eJXK/qN8yi/htTJHbM3dKmTujcZiBSUu5hTYK0ZjD/AIfYVFu+tu+M2aKSVLKqgKRw5d3Dcfhzgu2+lgN1S+nHvta57hMzQ2gQ17mFV32Qqv4eyJldQ67jH1rWtM50S2qrqEJ4X8/8TRMbm0L69FIfJbZHgMAgfOFFzPK+nlAJi6gAtrf11nsODteeffinsgq4xA3PYHuIFvpEpbTNR5sTOR5C5iK/fIVINhF52eRZ4nWROBtgxaKKn+ZvD0Aqe8Ih/D2p7wnZwOfkzCioY8uePpNsegFQfqHxiHoFU94TcA8jEEmdm1m1PQSpzEb/AEHV5iDgHZjw/rODm82Q6CVeY9I8dBanMTcAbMcrxyseU1/9D1OYnL0KqDlM4DyMkJPRS5mn/o2oJfdFeiGWqKlUDJT7Vveb9I8OPlNx0hp7ei56G7E9mo9ZUUdc480TgvcTvMuFuxvOxFYs3dJ8NTgXbOpSpnRPSXSMrG8fVawgxvw3wtg0S0r2maxO2HRbEXAuPSaKmp4n7/aU3SXZZexUfm36cY8P+ks09bRidqbVZjdWIPCxI8pJsXaFTOLnNrxubeEOo9FHY7ppdg9EsjZn3Dhz+kdPXZBJvpF/h0L0gW320MoMQjAkXO+ajF1Qoyj0lHWAJvIU+zsxzpDMM+QXMwPTTpHncqh7K9nTceZ75rNt1myFKY7TaX90cT+0wOI6M1Xa+6FPolmrb0jNtiLm8Vakv/6RqGSL0RqfYmSItj+h+My10ubDNr4az0+tVIeeebL6PVEdTbcZ6HiqB7N99hf0hv0tFvHfbTCKLkym/EuoBge1vLqF8bE/IS+wFPSZr8ScO1ZKdJQdLubczoLjwzes0+uxsr9nilSpIS81TdEnjB0PebjJDZmOsOkXrZph0PeO/o9/u8HFG2e6Zl7oocSpJX7vOBWdPEGi507p1l7pUDLzMW45n1m4mLUqOQiZByErAV94+scCPePrNxMWQUcouUcpXqw5/GPV/wDd8ZtG0GEDlOyiB5CdzGTHDW/M5HdxitpexlLfomWnc2Ag+0HyrkXfCmqqi9n1OplTlu1yd/H78JC630joxY9fkx+FonjLEDKIyjYC8ixFeFLXSDVHE3Nzzky2tfnK7Co1wXqXW9goABY8vCFriUYlEP5d5O65jU0uhJl09kdSsAb2jcRi2VkugZN7tfVe/LxGvwguOcp2jZtdbaHutztK5ttqWSmFYmpojKMyd/a3XHEcLScvdF6n8TarlAvpaQYjHovHXlKcvWy2zpfmQZna2ysUWLdemp3ENHar4RGHC/Y09bEq54gwMoztYeszzYXEr/8ARD6j9oWmNrKNWW/d/iCYf/QbyL1JpqeGQDcPGP6hOQmfo7Rqne0MTF1DxllKOfTLQ0F5CJ1S8pXnEvzjHxbDUmbigaLN1RdTYcvGQVnX9R0mK2l0nQVwjPkVWAzHdbixHrB8X0xpOyFHyLnJN+CLrdu+2tvKRbffR0xCWuz0ikuXQRteiGYkjX7tMkOneHLIc41GuuoB5jmDL0bRzgOh7JEaJ2xMnpBbYReUQ4ReUEGKfnF9reV4IiFeyLyET2NOQg4xbRfa27oOKMBLUXk3p/M7Ovf6fzC7xt+6MEG6xe/0/mJ1i8j6QsgchEFuUYGgQ1FHP0ndcnM+kK05TjblBo2gI115n0kZxaji3pLREXkPQRyovuj0EBtAeF2sircZi7HKg43tqe4C418ZC22kBALhmJ1I18gT96S3Oz6bb0U+Kg798YdjUf8ASp/2r9JKobeys5ElrRSVek1MOyFhdWK2B0FmI893xkrdI6Si4I/NbTusSfiZYVNh0Lk9TSve5ORbnztI6mxqA/8AlT/tX6TcBvug1DpDTddDu+/rErbWpkaPr4MP2ijZ9JCctNB/1UftOajT9xf7RGmdCVWyorbQclD2DkcOO0RcZSCLW33IPlAVxNdWrFClqhul3N10Fibrru+JmiNKn7i/2icKCe6v9ogcJhnI5KY7RxLghsgB39vUm28cp2yKARzUYrnItv3A/vL3Kvuj0ETIt/yiacaT2Gsra0SHHD3xIqmMX3hHNTU/pEQYZeQj9kugSpWU/qEatveEP9mX3RHDDr7om0EGoFeLCGpUT3x6xBh190R3Up7o9ITD1qIdzj1E5lU/qHqIi4dfdEUU190TAB3wNJj2lpk+Cxp2bQI/Ilv+K/SF9UvuidlXlM0HYA2xsN/pUv7U+kKpUkQWTKByGgj+rQfpnZF92YDYhtzHrFuvMesXq15RvVrymMdmHMeoi5hzHwjhSXlO6ocvnCY//9k='


  @Input()
  color='yellow';




  constructor() { }
  ngOnInit(): void {
  }

  ejecutarEventoClick(){
    console.log({mensaje:'click'});
  }
  ejecutarEventoBlur(){
    console.log({mensaje:'blur'});
  }

}

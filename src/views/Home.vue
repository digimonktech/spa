<template>
  <div id="HOME">
    <Todos v-bind:todos="todos" />
    <!-- <Json v-bind:json="json" /> -->

    <div>
      <b-carousel
        id="carousel-1"
        :interval="5000"
        fade
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          class="firstCaro"
          v-for="image of todos.galleria_generale"
          v-bind:key="image + Math.random()"
          caption="Questa offerta non è più disponibile"
          text="GENTILE SIGNOR BUTTAFOCO La Sua offerta da Borgobrufa SPA Resort"
          :img-src="`${image.src}`"
        ></b-carousel-slide>
      </b-carousel>
    </div>
    <div>
      <b-jumbotron id="back-color">
        <div class="paddingbox">
          <div class="row">
            <div
              class="col-sm-6"
              style="padding-top: 47px; color: grey; text-align: justify"
            >
              <p class="styles" style="line-height: 0px">
                Gentile Signor Buttafoco,
              </p>
              <p class="styles">
                ringraziandola per la Sua gradita richiesta di informazioni
                siamo ad inviarle il dettaglio della nostra offerta nelle date
                di Suo interesse per la nostra Imperial Suite Le abbiamo inviato
                il preventivo in Imperial Suite in quanto la Luxury Love Suite
                risulta già prenotata per la data da lei richiesta.
              </p>
              <p class="styles" style="line-height: 0px">
                Cosa ne pensa della nostra proposta?
              </p>
              <p class="styles">Desidera prenotare il soggiorno?</p>
              <p class="styles">
                Al momento non le stiamo opzionando la Suite. La informiamo che
                i prezzi potrebbero variare in base alle disponibilità, pertanto
                non esiti a contattarci nel caso in cui fosse interessato alla
                tariffa indicata.
              </p>
              <p class="styles">
                Sperando di aver fatto cosa gradita rimaniamo a disposizione e
                porgiamo
                <br />Cordiali saluti, <br />Alvaro Angeli
              </p>
            </div>
            <div class="col-sm-6">
              <section style="padding-top: 40px">
                <p class="style" style>
                  <span>UN MONDO DI BENESSERE</span>
                  <br />SPA più grande dell’Umbria con 3000 mq
                </p>
                <p class="style" style>
                  TRATTAMENTI, SAUNE E PISCINE: NON FATEVI MANCARE NULLA Viaggio
                  nei sensi nel Mondo delle Acque e delle Saune
                </p>
                <p class="style" style>
                  IL PIACERE DI CONCEDERSI MOMENTI DI BENESSERE UNICI
                  Trattamenti innovativi al vino e olio d’oliva
                </p>
              </section>
            </div>
          </div>
        </div>
      </b-jumbotron>
    </div>

    <div class="full-perposal">
      <!--<h1>{{ data1.id }}</h1>-->

      <b-container>
        <b-row>
          <b-col md="6" v-for="data1 in proposal.soluzioni" :key="data1">
            <div
              @click="activate(data1.id)"
              :class="{ border_new: active_el == data1.id }"
              style="max-width: 400px"
            >
              <div class="text-pp">
                <img :src="`${data1.img}`" class="img-fluid w-100 d-block" />
                <div class="perposal-name">Soluzione {{ data1.id }}</div>
              </div>
              <div class="perposal-text">
                <div class="text-left">
                  <h3 class="font-weight-light subtitle-2">
                    ARRIVO / PARTENZA
                  </h3>
                  <h4>
                    {{ data1.dal }} fino a
                    {{ data1.al }}
                  </h4>
                  <h3 class="font-weight-light subtitle-2">CATEGORIA CAMERA</h3>
                  <h4>{{ data1.tipologie }}</h4>
                  <h3 class="font-weight-light subtitle-2">
                    PERSONE / TRATTAMENTO
                  </h3>
                  <h4>
                    {{ data1.occupancy }} /
                    {{ data1.trattamento }}
                  </h4>
                  <div
                    class="text-uppercase headline font-weight-bold text-right sizebox"
                  >
                    € {{ data1.prezzo }}
                  </div>

                  <div
                    class="align-items-center d-flex font-weight-bold headline justify-content-between mt-4 text-uppercase"
                  >
                    <b-link
                      class="btn btn-lg btn-outline-warning"
                      id="confirm2"
                      @click="
                        activate(data1.id);
                        selected = `${data1.id}`;
                      "
                      :class="{ active: active_el == data1.id }"
                      v-on:click="show = `foo-${data1.id}`"
                      >Details</b-link
                    >
                    <b-link
                      href="#"
                      class="btn btn-lg btn-outline-warning"
                      @click="gotonextpage()"
                      :key="gotonextpage"
                      >Confirm</b-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="tabsbv mt-5">
      <b-container>
        <ul>
          <li
            v-for="data1 in proposal.soluzioni"
            :key="data1"
            @click="selected = `${data1.id}`"
            :class="{ active: selected === `${data1.id}` }"
            v-on:click="show = `foo-${data1.id}`"
          >
            proposal {{ data1.id }}
          </li>
          <!-- <li
            @click="selected = 2"
            :class="{ active: selected === 2 }"
            v-on:click="(showMessage = false), (showMessage2 = true)"
          >
            proposal 2
          </li>-->
        </ul>
        <div
          class="proposal-new-box"
          v-for="data1 in proposal.soluzioni"
          :key="data1"
        >
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" id="accord-heading" role="tab">
              <b-button
                style="
                text-align: left;
                background: transparent;
                border: none;
                font-size: 22px;
              "
                variant="light"
                v-b-toggle="`foo-${data1.id}`"
                block
              >
                soluzioni {{ data1.id }}
                <i class="fa fa-angle-down right-icon" aria-hidden="true"></i>
              </b-button>
            </b-card-header>
            <b-collapse
              :id="`foo-${data1.id}`"
              accordian="acc1"
              visible
              role="tabpanel"
            >
              <b-card-body v-if="show == `foo-${data1.id}`">
                <div>
                  <div class="persoal-cc">
                    <h3>Soluzione soggiorno n. 1 nel dettaglio</h3>

                    <h2>€ {{ data1.prezzo }}</h2>
                  </div>

                  <div class="sliderbanner">
                    <h4>{{ data1.tipologie }}</h4>

                    <div>
                      <b-carousel
                        :id="`${data1.id}`"
                        v-model="slide"
                        :interval="4000"
                        controls
                        indicators
                        background="#ababab"
                        img-width="1024"
                        img-height="480"
                        style="text-shadow: 1px 1px 2px #333"
                      >
                        <!-- Text slides with image -->
                        <b-carousel-slide
                          v-for="data of data1.galleria"
                          v-bind:key="data + Math.random()"
                          :img-src="`${data.src}`"
                        ></b-carousel-slide>
                      </b-carousel>
                    </div>

                    <div class="porsoal-new1">
                      <!-- <p>
                      The 35 sqm suite is located on the 6th floor, it is a
                      refuge for 2 or 3 people to get lost in, where you can
                      find large spaces of light suspended halfway between sky
                      and sea. Completely renovated, it consists of a bedroom
                      with a king size bed and a comfortable living area
                    </p>
                    <p>
                      The Suite is completed by a 47 sqm terrace overlooking the
                      sea with comfortable loungers.
                    </p>
                    <p>
                      Services included
                      <br />Simmons mattressAir ConditioningCushions menu for
                      better sleepLCD TVWi-FiPhonMinifridgeSafe boxBathrobe and
                      slippersExclusive courtesy set1 umbrella and 2 sunbeds in
                      the 1st row of the sea at our private beach chalet 75
                      </p>-->
                      <b-row>
                        <b-col md="6">
                          <div class="des-tile text-left">
                            <h2>PENSIONE COMPLETA</h2>
                            <p>
                              Per 2 persone, Da Sab 12 Dic a Sab 19 dic (7
                              Notti)
                            </p>
                            <b-button variant="outline-success"
                              >Da Parte Dell'operatore:-10%</b-button
                            >
                          </div>
                        </b-col>

                        <b-col md="6">
                          <div class="des-tile text-right">
                            <span class="suboo">
                              <i class="fa fa-euro"></i>
                              840,00
                              <sub>,00</sub>
                            </span>
                            <div class="fv">
                              <i class="fa fa-euro"></i>
                              756
                              <sub>,00</sub>
                            </div>
                          </div>
                        </b-col>
                      </b-row>
                    </div>

                    <div v-b-toggle.collapse-de class="detailsv">
                      <i class="fa fa-plus"></i> Details
                    </div>

                    <b-collapse id="collapse-de" class="mt-2">
                      <div class="destailsdd">
                        <div class="row border-box">
                          <div class="text-left body-1 font-weight-bold col">
                            Descrizione
                          </div>
                          <div
                            class="text-right text-uppercase body-1 font-weight-bold col"
                          >
                            PREZZO
                          </div>
                        </div>
                        <div
                          class="row border-box"
                          v-bind:key="prezzi + Math.random()"
                          v-for="prezzi in data1.risorse[0].prezzi"
                        >
                          <div class="text-left body-1 font-weight-light col">
                            {{ prezzi.descrizione }}
                            <!-- SUITE - BB from 12/30/2020 to 12/31/2020 -->
                            <div></div>
                          </div>
                          <div class="text-right text-uppercase body-1 col">
                            € {{ prezzi.importo }}
                          </div>
                        </div>
                      </div>
                    </b-collapse>

                    <div class="des-tile text-left mt-3">
                      <h2 class="exrea-service">
                        SERVICE EXTRA
                        <span>
                          <i class="fa fa-euro"></i>
                          50
                          <sub>,00</sub>
                        </span>
                      </h2>
                    </div>
                    <div v-b-toggle.collapse-b class="detailsv">
                      <i class="fa fa-plus"></i> Details
                    </div>
                    <b-collapse id="collapse-b" class="mt-2">
                      <div class="destailsdd">
                        <div class="row border-box">
                          <div class="text-left body-1 font-weight-light col">
                            N.7 aria condizionata
                            <div></div>
                          </div>
                          <div class="text-right text-uppercase body-1 col">
                            Incluso
                          </div>
                        </div>

                        <div class="row border-box">
                          <div class="text-left body-1 font-weight-light col">
                            n.7 Posto auto
                            <div></div>
                          </div>
                          <div class="text-right text-uppercase body-1 col">
                            <div class="des-tile text-right">
                              <div class="fv">
                                <i class="fa fa-euro"></i>
                                70
                                <sub>,00</sub>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-collapse>
                    <div class="row mt-3">
                      <div
                        class="text-left headline font-weight-light col font-32"
                      >
                        Total price
                      </div>
                      <div
                        class="text-right text-uppercase headline font-weight-bold col font-32"
                      >
                        € {{ data1.prezzo }}
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="showMessage2">
                  <b-card-text>
                    <div class="persoal-cc">
                      <h3>Living room solution n. 2 in detail</h3>

                      <h2>€ 180</h2>
                    </div>

                    <div class="sliderbanner">
                      <h4>Standard</h4>

                      <div>
                        <b-carousel
                          id="carousel-`${data1.id}`"
                          v-model="slide"
                          :interval="4000"
                          controls
                          indicators
                          background="#ababab"
                          img-width="1024"
                          img-height="480"
                          style="text-shadow: 1px 1px 2px #333"
                        >
                          <!-- Text slides with image -->
                          <b-carousel-slide
                            img-src="https://picsum.photos/1024/480/?image=52"
                          ></b-carousel-slide>

                          <!-- Slides with custom text -->
                          <b-carousel-slide
                            img-src="https://picsum.photos/1024/480/?image=54"
                          ></b-carousel-slide>

                          <!-- Slides with image only -->
                          <b-carousel-slide
                            img-src="https://picsum.photos/1024/480/?image=58"
                          ></b-carousel-slide>

                          <!-- Slides with img slot -->
                          <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                          <b-carousel-slide>
                            <template #img>
                              <img
                                class="d-block img-fluid w-100"
                                width="1024"
                                height="480"
                                src="https://picsum.photos/1024/480/?image=55"
                                alt="image slot"
                              />
                            </template>
                          </b-carousel-slide>

                          <!-- Slide with blank fluid image to maintain slide aspect ratio -->
                          <!-- <b-carousel-slide
                          caption="Blank Image"
                          img-blank
                          img-alt="Blank image"
                          ></b-carousel-slide>-->
                        </b-carousel>
                      </div>

                      <div class="porsoal-new1">
                        <!-- <p>
                      The 35 sqm suite is located on the 6th floor, it is a
                      refuge for 2 or 3 people to get lost in, where you can
                      find large spaces of light suspended halfway between sky
                      and sea. Completely renovated, it consists of a bedroom
                      with a king size bed and a comfortable living area
                    </p>
                    <p>
                      The Suite is completed by a 47 sqm terrace overlooking the
                      sea with comfortable loungers.
                    </p>
                    <p>
                      Services included
                      <br />Simmons mattressAir ConditioningCushions menu for
                      better sleepLCD TVWi-FiPhonMinifridgeSafe boxBathrobe and
                      slippersExclusive courtesy set1 umbrella and 2 sunbeds in
                      the 1st row of the sea at our private beach chalet 75
                        </p>-->
                        <b-row>
                          <b-col md="6">
                            <div class="des-tile text-left">
                              <h2>PENSIONE COMPLETA</h2>
                              <p>
                                Per 2 persone, Da Sab 12 Dic a Sab 19 dic (7
                                Notti)
                              </p>
                              <b-button variant="outline-success"
                                >Da Parte Dell'operatore:-10%</b-button
                              >
                            </div>
                          </b-col>

                          <b-col md="6">
                            <div class="des-tile text-right">
                              <span class="suboo">
                                <i class="fa fa-euro"></i>
                                840,00
                                <sub>,00</sub>
                              </span>
                              <div class="fv">
                                <i class="fa fa-euro"></i>
                                756
                                <sub>,00</sub>
                              </div>
                            </div>
                          </b-col>
                        </b-row>
                      </div>

                      <div v-b-toggle.collapse-c class="detailsv">
                        <i class="fa fa-plus"></i> Details
                      </div>

                      <b-collapse id="collapse-c" visible class="mt-2">
                        <div class="destailsdd">
                          <div class="row border-box">
                            <div class="text-left body-1 font-weight-bold col">
                              Descrizione
                            </div>
                            <div
                              class="text-right text-uppercase body-1 font-weight-bold col"
                            >
                              PREZZO
                            </div>
                          </div>
                          <div
                            class="row border-box"
                            v-bind:key="prezzi + Math.random()"
                            v-for="prezzi in data1.risorse[0].prezzi"
                          >
                            <div class="text-left body-1 font-weight-light col">
                              {{ prezzi.descrizione }}
                              <!-- SUITE - BB from 12/30/2020 to 12/31/2020 -->
                              <div></div>
                            </div>
                            <div class="text-right text-uppercase body-1 col">
                              € {{ prezzi.importo }}
                            </div>
                          </div>
                        </div>
                      </b-collapse>
                      <div class="des-tile text-left mt-3">
                        <h2 class="exrea-service">
                          SERVICE EXTRA
                          <span>
                            <i class="fa fa-euro"></i>
                            50
                            <sub>,00</sub>
                          </span>
                        </h2>
                      </div>
                      <div v-b-toggle.collapse-d class="detailsv">
                        <i class="fa fa-plus"></i> Details
                      </div>
                      <b-collapse id="collapse-d" visible class="mt-2">
                        <div class="destailsdd">
                          <div class="row border-box">
                            <div class="text-left body-1 font-weight-light col">
                              N.7 aria condizionata
                              <div></div>
                            </div>
                            <div class="text-right text-uppercase body-1 col">
                              Incluso
                            </div>
                          </div>

                          <div class="row border-box">
                            <div class="text-left body-1 font-weight-light col">
                              n.7 Posto auto
                              <div></div>
                            </div>
                            <div class="text-right text-uppercase body-1 col">
                              <div class="des-tile text-right">
                                <div class="fv">
                                  <i class="fa fa-euro"></i>
                                  70
                                  <sub>,00</sub>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </b-collapse>
                      <div class="row mt-3">
                        <div
                          class="text-left headline font-weight-light col font-32"
                        >
                          Total price
                        </div>
                        <div
                          class="text-right text-uppercase headline font-weight-bold col font-32"
                        >
                          € {{ data1.prezzo }}
                        </div>
                      </div>
                    </div>
                  </b-card-text>
                </div>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </b-container>
    </div>

    <div
      class="container"
      v-bind:key="data + Math.random()"
      v-for="data of todos.soluzioni"
    >
      <!-- <p style="text-align: right; margin-right: 2%">
        dal {{ data.dal }} al {{ data.al }} per {{ data.occupancy }}
        {{ data.risorse[0].Trattamento.Descrizione }}
      </p>-->

      <div class="accordion" role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" id="accord-heading" role="tab">
            <b-button
              style="
                text-align: left;
                background: transparent;
                border: none;
                font-size: 22px;
              "
              variant="light"
              block
              v-b-toggle.accordion-1
            >
              1× IMPERIAL SUITE (120 MQ)
              <i class="fa fa-angle-down right-icon" aria-hidden="true"></i>
            </b-button>
          </b-card-header>
          <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <p
                v-html="data.risorse[0].info[0].testo"
                style="text-align: left"
              ></p>

              <div id="carusel-22">
                <b-carousel
                  id="carousel-2"
                  :interval="0"
                  controls
                  fade
                  indicators
                  background="#"
                  img-width="1024"
                  img-height="480"
                  style="text-shadow: 1px 1px 2px #333"
                >
                  <!-- Text slides with image -->
                  <b-carousel-slide
                    v-bind:key="image1 + Math.random()"
                    v-for="image1 of data.galleria"
                    :img-src="`${image1.src}`"
                  ></b-carousel-slide>
                </b-carousel>
              </div>
              <!-- <div v-html="`${todos.info[3].testo}`">
                {{ todos.info[0].testo }}
              </div>-->
              <!-- <div class="row">
                <div class="col-md-6">
                  <b-card-text
                    >Pacchetto con prima colazione ed accesso SPA</b-card-text
                  >
                  <b-card-text>
                    La quotazione è la somma dei seguenti servizi:
                  </b-card-text>
                  <b-card-text style="text-align:left; padding:30%">
                    <li>
                      alloggio in Imperial Suite
                    </li>

                    <li>
                      prima colazione a buffet a disposizione dalle ore 7,30
                      alle 11,00, con possibilità di usufruirne più volte*
                    </li>
                    <li>
                      utilizzo dei servizi del Mondo delle Acque e Mondo delle
                      Saune presso il nostro centro benessere di 3000 mq*
                    </li>
                    <li>utilizzo del servizio SKY in camera</li>
                    <li>connessione internet illimitata</li>
                  </b-card-text>
                </div>
                <div class="col-md-6">
                  <img style="height:50%" :src="`${data.galleria[0].src}`" />
                </div>
              </div>-->
            </b-card-body>
          </b-collapse>
        </b-card>
        <div>
          <b-jumbotron id="back-color">
            <!-- <template #header>BootstrapVue</template> -->

            <table class="table">
              <th style="width: 79%; border-right: 1px solid #ccc">
                Descrizione
              </th>
              <th style="text-align: right">Prezzo totale</th>
              <tbody>
                <td>2 persone 2 notti (26.03.-28.03.) Prima colazione</td>
                <td style="text-align: right">€ {{ data.prezzo }}</td>
              </tbody>
            </table>
          </b-jumbotron>
        </div>
        <b-card no-body class="mb-1">
          <b-card-header
            header-tag="header"
            id="accord-heading"
            class="p-1"
            role="tab"
          >
            <b-button
              style="
                text-align: left;
                background: transparent;
                border: none;
                color: black;
                font-weight: bold;
              "
              block
              v-b-toggle.accordion-9
            >
              Un viaggio nella nostra Imperial Suite
              <i aria-hidden="true" class="fa fa-angle-down right-icon"></i>
            </b-button>
          </b-card-header>
          <b-collapse id="accordion-9" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text style="text-align: left">
                <div>
                  <iframe src="https://vimeo.com/372601999"></iframe>
                </div>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header
            header-tag="header"
            id="accord-heading"
            class="p-1"
            role="tab"
          >
            <b-button
              style="
                text-align: left;
                background: transparent;
                border: none;
                color: black;
                font-weight: bold;
              "
              block
              v-b-toggle.accordion-3
              variant="info"
            >
              {{ todos.info[2].titolo }}
              <i aria-hidden="true" class="fa fa-angle-down right-icon"></i>
            </b-button>
          </b-card-header>
          <b-collapse
            id="accordion-3"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text style="text-align: left">
                <div v-html="`${todos.info[2].testo}`"></div>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header
            header-tag="header"
            id="accord-heading"
            class="p-1"
            role="tab"
          >
            <b-button
              style="
                text-align: left;
                background: transparent;
                border: none;
                color: black;
                font-weight: bold;
              "
              block
              v-b-toggle.accordion-7
              variant="info"
            >
              {{ todos.info[3].titolo }}
              <i aria-hidden="true" class="fa fa-angle-down right-icon"></i>
            </b-button>
          </b-card-header>
          <b-collapse
            id="accordion-7"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text style="text-align: left">
                <div v-html="`${todos.info[3].testo.slice()}`"></div>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header
            header-tag="header"
            id="accord-heading"
            class="p-1"
            role="tab"
          >
            <b-button
              style="
                text-align: left;
                background: transparent;
                border: none;
                color: black;
                font-weight: bold;
              "
              block
              v-b-toggle.accordion-10
              variant="info"
            >
              Listino trattamenti centro benessere
              <i aria-hidden="true" class="fa fa-angle-down right-icon"></i>
            </b-button>
          </b-card-header>
          <b-collapse
            id="accordion-10"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text style="text-align: left">
                Per visionare il listino trattamenti, consigliamo di utilizzare
                il seguente link
                <!-- <a>link</a> -->
                <!-- <a href="http://www.borgobrufa.it/it/benessere/itrattamenti/108-0.html">link</a> --> </b-card-text
              >Tali servizi vanno prenotati prima dell’arrivo in struttura
              presso la Reception della Spa chiamando il numero 075/9883220 o
              scrivendo all'indirizzo benessere@borgobrufa.it .
            </b-card-body>
          </b-collapse>
        </b-card>
        <div class="text-right mt-3">
          <button
            class="btn btn-lg btn-warning"
            @click="gotonextpage()"
            :key="gotonextpage"
          >
            Confirm
          </button>
        </div>
      </div>
      <div class="container-fluid cont">
        <div class="row">
          <div class="col-md-3" style="text-align: -webkit-left">
            <img
              src="https://borgobrufaspa.re-guest.com/Media/Image/74661b50-33cf-4c54-b598-3578747fbdde/108"
              alt="trip-advisor"
            />
          </div>
          <div class="col-md-3" style="text-align: -webkit-left">
            <img
              src="https://borgobrufaspa.re-guest.com/Media/Image/221de4eb-7036-491c-be7c-d61c81e6f684/108"
            />
          </div>
          <div class="col-md-2"></div>
          <div class="col-md-4" style="text-align: center">
            <p style="padding: 18px; background: #ccc; color: white">
              Questa offerta non è
              <br />più disponibile
            </p>
            <p style="font-size: 12px; color: grey">
              Questa offerta è valida secondo disponibilità fino al 28/11/2020.
              Al momento non risultano camere opzionate a suo nome.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- container ends here -->

    <div class="container-fluid contai" style="padding-left: 112px">
      <div class="row">
        <div class="col-md-7">
          <h1 style="font-family: -webkit-pictograph; font-size: 32px">
            HA DOMANDE SULL'OFFERATO?
          </h1>
          <p style="color: grey; font-size: 15px">
            Servono informazioni aggiuntive? Non esiti a contattarci sul
            messenger!
          </p>
        </div>
        <div class="col-md-3">
          <p style="text-align: -webkit-right; color: dimgrey">
            Il Suo interlocutore
            <br />Alvaro Angeli
          </p>
          <div
            class="cont"
            style="
              text-align: -webkit-right;
              background: #c3b89e;
              padding: 10px;
              position: relative;
              left: 59px;
            "
          >
            <a class="button2 btncontact" style="color: white"
              >Ci contatti nel messenger</a
            >
          </div>
        </div>

        <div class="col-md-2" style="text-align: center; padding-top: 0px">
          <img
            src="https://borgobrufaspa.re-guest.com/media/image/9f795628-6ffc-469e-9e72-dddb92ef16fc?maxWidth=100&maxHeight=100"
          />
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-3" style="padding-right: 0px; padding-left: 0px">
              <b-img
                src="https://borgobrufaspa.re-guest.com/Media/ImageFitted/0dcba13b-87a5-4c1f-86db-203a36176c3a/1170/658"
                style="width: 100%"
              ></b-img>
              <b-img
                src="https://borgobrufaspa.re-guest.com/Media/ImageFitted/0dcba13b-87a5-4c1f-86db-203a36176c3a/1170/658"
                style="width: 100%"
              ></b-img>
            </div>
            <div class="col-md-3" style="padding-right: 0px; padding-left: 0px">
              <b-img
                src="https://borgobrufaspa.re-guest.com/Media/ImageFitted/14e4d4e0-2d28-4d21-84ce-1245c4e2eb02/1170/658"
                style="width: 100%"
              ></b-img>
              <b-img
                src="https://borgobrufaspa.re-guest.com/Media/ImageFitted/df6cfa8d-7631-4e92-9ff7-8b16c860525c/1170/658"
                style="width: 100%"
              ></b-img>
            </div>

            <div class="col-md-6" style="padding-right: 0px; padding-left: 0px">
              <b-img
                src="https://borgobrufaspa.re-guest.com/Media/ImageFitted/d88aaf6f-65c1-42dd-aa27-1e735dfa5deb/1170/658"
                style="width: 100%"
              ></b-img>
            </div>
          </div>
        </div>
        <div class="col-md-2" style="padding-right: 0px; padding-left: 0px">
          <b-img
            src="https://borgobrufaspa.re-guest.com/Media/ImageFitted/f73db4ca-ac01-4af3-95e0-7a5b9654b744/1170/658"
            style="width: 100%"
          ></b-img>
          <div class="impresss">
            <h4>IMPRESSIONI</h4>
            <p
              style="font-size: 14px; color: darkslategrey; padding-bottom: 2px"
            >
              Alcune foto del nostro albergo
            </p>
          </div>
        </div>
        <div class="col-md-2" style="padding-right: 0px; padding-left: 0px">
          <b-img
            src="https://borgobrufaspa.re-guest.com/Media/ImageFitted/fab39be9-9fe1-4d5e-a583-9fd700779025/1170/658"
            style="width: 100%"
          ></b-img>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-8" style="padding-left: 0px; padding-right: 0px">
          <iframe
            width="100%"
            height="350"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Borgobrufa%20Spa%20Resort%20Via%20del%20Colle,%2038,%2006089%20Brufa%20PG,%20Italy+(Borgobrufa%20SPA%20Resort)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
        <div class="col-sm-4 bg-cont" style="padding-left: 55px">
          <h1 class="contatto">CONTATTO</h1>
          <i class="fa fa-map-marker" style="color: grey"></i>&nbsp; &nbsp;
          <span>Via del Colle, 38, 06089, Brufa di Torgiano (PG)</span>
          <br />
          <i class="fa fa-phone" style="color: grey; padding-top: 8px"></i
          >&nbsp;&nbsp;
          <span>+390759883</span>
          <br />
          <i class="fa fa-envelope" style="color: grey; padding-top: 8px"></i
          >&nbsp; &nbsp;
          <span>info@borgobrufa.it</span>
          <br />
          <i class="fa fa-globe" style="color: grey; padding-top: 8px"></i
          >&nbsp; &nbsp;
          <span>www.borgobrufa.it</span>
          <!-- <i class="fa fa-phone" style='font-size:24px'><span>sbsb</span></i>
         
          <span><i class="fa fa-phone" style='font-size:24px'></i><p style="color:grey;font-size:15px;">Via del Colle, 38, 06089, Brufa di Torgiano<br> (PG)</p></span>
          <i class="fa fa-phone" style='font-size:24px'></i><p>+39 075
            9883</p>
          <p style="font-size:15px;color:grey;">
       +39 075
            9883 <br> info@borgobrufa.it <br> www.borgobrufa.it
          </p>-->
        </div>
      </div>
    </div>
    <div>
      <h1 class="text-center nostri">Follow Us</h1>
      <!-- <p style="font-weight:none;">I NOSTRI PARTNER</p> -->
    </div>

    <!-- <div>
      <b-img
        src="https://borgobrufaspa.re-guest.com/Media/Image/f80e2984-c91b-424a-9fd7-aefa001839cc/115"
      ></b-img>
      <b-img
        src="https://borgobrufaspa.re-guest.com/Media/Image/bb737869-7c75-42cd-a549-d066158aeccf/115"
      ></b-img>
      <b-img
        src="https://borgobrufaspa.re-guest.com/Media/Image/9f9740dc-bae0-4307-aa52-68337d7a6ec3/115"
      ></b-img>
    </div>-->

    <div class="container">
      <div class="row">
        <div class="col-md-12 col-md-offset-4 set">
          <ul class="iconsocial">
            <li>
              <b-link href="#">
                <img src="../assets/you.png" style="width:50px" alt="youtube" />

                <!-- <i class="fa fa-youtube"></i> -->
              </b-link>
            </li>
            <li>
              <b-link href="#">
                <img
                  src="../assets/whatsapp.png"
                  style="width:40px"
                  alt="what"
                />

                <!-- <i class="fa fa-whatsapp"></i> -->
              </b-link>
            </li>
            <li>
              <b-link href="#">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1000px-Telegram_logo.svg.png"
                  style="width:40px"
                  alt="tele"
                />

                <!-- <i class="fa fa-telegram"></i> -->
              </b-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <footer>
      <div class="bordertop text-center pt-2 pb-2">
        <div class="links">
          <span class="small" style="color: gray"
            >© 2020 Borgobrufa SPA Resort</span
          >
          &nbsp; &nbsp;
          <span class="small" style="padding-left: 23px; color: gray"
            >Part. IVA 02535970541</span
          >
          &nbsp;
          <span
            class="small"
            style="padding-left: 23px; font-size: 18px; color: gray"
          >
            <a
              class="footerlink small default"
              href="/private-area/c/pp/62480/Jg9vtfOWQkiCbmKHEO40Ng"
              target="_blank"
              >Informativa sulla privacy</a
            >
          </span>

          <span
            class="offer-pdf small"
            style="padding-left: 23px; font-size: 18px; color: gray"
          >
            <a
              class="footerlink small default"
              href="/Resources/OfferPdf/256200/Jg9vtfOWQkiCbmKHEO40Ng"
              target="_blank"
              style="color: gray"
              >Visualizzazione stampa</a
            >
          </span>
          <div class="clear">&nbsp;</div>
        </div>
        <!-- <a
          class="publisher small default first-letter-capital"
          href="https://www.reguest.io"
          target="_blank"
          style="color: gray; padding-left: 13px; font-size: 16px"
          >created with
          <img
            src="https://borgobrufaspa.re-guest.com/Images/logo-reguest-small.png"
            alt="ReGuest"
            class="reguest"
            style="width: 79px; padding-bottom: 2px"
        /></a>-->
        <div class="clear">&nbsp;</div>
      </div>
      <div class="footer-icon">
        <a href="#"><i class="fa fa-comments-o"></i></a>
      </div>
    </footer>
  </div>
</template>

<!-- v-on:del-todo="deleteTodo" -->

<script>
// import VueRouter from "vue-router";
import Todos from "../components/Todos";
import json from "../assets/proposal.json";
// import AddTodo from "../components/AddTodo";
import axios from "axios";
export default {
  name: "Home",
  components: {
    Todos,
  },
  data() {
    return {
      todos: [],
      proposal: [],
      myJson: json,
      key: "1",
      show: "",
      showMessage: true,
      showMessage2: false,
      selected: true,
      isclass: "",
    };
  },
  methods: {
    placeClick(marker) {
      console.log("this marker was clicked", marker);
    },
    gotonextpage() {
      console.log("hello");
      this.$router.push({ path: "/thankyou" });
    },
    activate: function(el) {
      console.log("el", el);
      this.active_el = el;
    },
  },

  created() {
    axios
      .get(
        "https://us-central1-hrcrm-439b3.cloudfunctions.net/webApi/api/v1/preventivi/86CEEBD2-4A66-4B73-91DD-887D68BEAE1D"
      )
      .then((res) => ((this.todos = res.data), console.log("hi", res.data)))
      .catch((err) => console.log(err));
  },
  mounted() {
    axios
      .get(
        "https://us-central1-hrcrm-439b3.cloudfunctions.net/webApi/api/v1/preventivi/277B4311-9922-450A-87CC-57A5447D5AB4"
      )
      .then((res) => ((this.proposal = res.data), console.log("hi", res.data)))
      .catch((err) => console.log(err));
  },
};
</script>

<style>
@font-face {
  font-family: "Gill Sans Light";
  src: url("https://reguest.s3-eu-west-1.amazonaws.com/common/fonts/hotelborgobrufa/mgillsans-light.eot");
  src: url("https://reguest.s3-eu-west-1.amazonaws.com/common/fonts/hotelborgobrufa/mgillsans-light.eot?#iefix")
      format("embedded-opentype"),
    url("https://reguest.s3-eu-west-1.amazonaws.com/common/fonts/hotelborgobrufa/mgillsans-light.woff2")
      format("woff2"),
    url("https://reguest.s3-eu-west-1.amazonaws.com/common/fonts/hotelborgobrufa/mgillsans-light.ttf")
      format("truetype"),
    url("https://reguest.s3-eu-west-1.amazonaws.com/common/fonts/hotelborgobrufa/mgillsans-light.otf")
      format("opentype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Gill Sans Light";
  src: url("https://reguest.s3-eu-west-1.amazonaws.com/common/fonts/hotelborgobrufa/mgillsans-light.eot");
  src: url("https://reguest.s3-eu-west-1.amazonaws.com/common/fonts/hotelborgobrufa/mgillsans-light.eot?#iefix")
      format("embedded-opentype"),
    url("https://reguest.s3-eu-west-1.amazonaws.com/common/fonts/hotelborgobrufa/mgillsans-light.woff2")
      format("woff2"),
    url("https://reguest.s3-eu-west-1.amazonaws.com/common/fonts/hotelborgobrufa/mgillsans-light.ttf")
      format("truetype"),
    url("https://reguest.s3-eu-west-1.amazonaws.com/common/fonts/hotelborgobrufa/mgillsans-light.otf")
      format("opentype");
  font-weight: normal;
  font-style: italic;
}
@font-face {
  font-family: "Gill Sans Light";
  src: url("https://reguest.s3-eu-west-1.amazonaws.com/common/fonts/hotelborgobrufa/mgillsans-bold.eot");
  src: url("https://reguest.s3-eu-west-1.amazonaws.com/common/fonts/hotelborgobrufa/mgillsans-bold.eot?#iefix")
      format("embedded-opentype"),
    url("https://reguest.s3-eu-west-1.amazonaws.com/common/fonts/hotelborgobrufa/mgillsans-bold.woff2")
      format("woff2"),
    url("https://reguest.s3-eu-west-1.amazonaws.com/common/fonts/hotelborgobrufa/mgillsans-bold.ttf")
      format("truetype"),
    url("https://reguest.s3-eu-west-1.amazonaws.com/common/fonts/hotelborgobrufa/mgillsans-bold.otf")
      format("opentype");
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: "Gill Sans Light";
  src: url("https://reguest.s3-eu-west-1.amazonaws.com/common/fonts/hotelborgobrufa/mgillsans-bold.eot");
  src: url("https://reguest.s3-eu-west-1.amazonaws.com/common/fonts/hotelborgobrufa/mgillsans-bold.eot?#iefix")
      format("embedded-opentype"),
    url("https://reguest.s3-eu-west-1.amazonaws.com/common/fonts/hotelborgobrufa/mgillsans-bold.woff2")
      format("woff2"),
    url("https://reguest.s3-eu-west-1.amazonaws.com/common/fonts/hotelborgobrufa/mgillsans-bold.ttf")
      format("truetype"),
    url("https://reguest.s3-eu-west-1.amazonaws.com/common/fonts/hotelborgobrufa/mgillsans-bold.otf")
      format("opentype");
  font-weight: bold;
  font-style: italic;
}

body {
  font-family: "Gill Sans Light", sans-serif !important;
  font-size: 16px !important;
  line-height: 22px !important;
}
.footer-icon {
  position: fixed;
  right: 50px;
  z-index: 1;
  bottom: 30px;
}

.footer-icon a {
  display: inline-block;
  width: 60px;
  height: 60px;
  font-size: 40px;
  background: #bdaa94;
  text-align: center;
  line-height: 60px;
  border-radius: 100%;
  color: #fff;
}

.footer-icon a:hover {
  opacity: 0.9;
  color: #ccc;
} 
div#accordion-1 .text {
  padding: 15px !important;
}

p.card-text img.medium {
  width: 49%;
  margin-bottom: 15px;
}

p.card-text strong {
  display: block;
  margin-bottom: 15px;
}

div#accordion-1 .rooms-feats.mt-3 {
  padding: 15px !important;
  display: table;
}
.paddingbox {
  width: 96%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}
.right-icon {
  float: right;
  font-size: 31px;
  margin-top: 0px;
}
.text {
  font-family: "Gill Sans Light", sans-serif !important;
  font-size: 16px !important;
  line-height: 22px !important;
}
ul.iconsocial {
  margin: 0px;
  padding: 0px;
}

ul.iconsocial li {
  display: inline-block;
  list-style: none;
  padding: 5px;
}

/* ul.iconsocial li a {
  font-size: 18px;
  display: block;
  width: 40px;
  height: 40px;
  background: #f0efed;
  border-radius: 100%;
  line-height: 40px;
  color: #000;
  border: 1px solid #ccc;
} */

ul.iconsocial li a:hover {
  background: #f5f5f5;
}

iconsocial .rooms-feats {
  font-family: "Gill Sans Light", sans-serif !important;
}
.contatto {
  color: #000000;
  font-family: "Gill Sans Light", sans-serif;
  font-size: 36px;
  line-height: 42px;
  font-weight: normal;
  padding-top: 61px;
}
p.card-text span {
  background-color: transparent !important;
}
.styles {
  text-align: justify;
  font-family: "Gill Sans Light", sans-serif !important;
}
.style {
  padding: 25px;
  background: #ccc;
  text-align: justify;
  color: grey;
}
.bg-cont {
  background: #f0efed;
}
.nostri {
  font-family: "Gill Sans Light", sans-serif;
  font-size: 37px;
  padding-top: 57px;
}
.set {
  text-align: center;
  margin-top: 40px;
  padding-bottom: 56px;
}

.impresss {
  text-align: center;
  background: #ccc;
  font-family: -webkit-pictograph;
}
.contai {
  background: #f0efed;
  padding-top: 70px;
  padding-bottom: 70px;
}
.cont {
  padding-top: 86px;
  padding-bottom: 86px;
}

#accord-heading {
  background: #ded9d3;
  padding-top: 0px;
  padding-bottom: 0px;
}

#carousel-1 {
  margin-top: -195px;
}
nav.navbar {
  z-index: 99;
  background-color: transparent;
}
#back-color {
  background-color: #f0efed;
  color: #333333;
  padding: 1rem 1rem 0rem;
}

footer.footer .bordertop {
  padding: 15px 15px 0 10px;
}
.border,
.bordertop,
.borderbottom,
.borderright,
div.chat div.messenger ul.messagesOne .arrowborder {
  border-color: #cccccc;
}
.bordertop {
  border-top-width: 1px;
  border-top-style: solid;
}
/* user agent stylesheet div {
  display: block;
}
.bgweb {
  background-color: #ffffff;
  color: #333333;
} */

h1.navbar-brand.mb-0 {
  display: inline-block;
  margin-left: 110px;
  margin-right: 110px;
}
@media (max-width: 992px) {
  .carousel-caption {
    position: relative !important;
    left: 0px !important;
    right: 0px !important;
    bottom: 0px !important;
  }
  h1.navbar-brand.mb-0 {
    margin: auto !important;
  }
  .container-fluid.contai {
    padding-left: 15px !important;
  }
  .cont {
    left: 0px !important;
    margin-bottom: 15px;
  }
  .col-sm-4.bg-cont {
    padding: 15px !important;
  }
  .col-sm-4.bg-cont {
    padding: 15px !important;
  }

  p.card-text span {
    display: block;
  }

  p.card-text ul {
    padding: 0px !important;
    text-align: left !important;
  }
  div#back-color table.table th {
    width: auto !important;
  }
  p.card-text img.medium {
    width: 100%;
  }
  .rooms-feats ul {
    padding-left: 15px !important;
  }
  .container-fluid.cont .col-md-3 {
    width: 50%;
    margin-bottom: 15px;
  }
  .col-md-12.col-md-offset-4.set img {
    width: 85px;
    left: 0px !important;
    margin-right: 10px;
  }
  .col-md-12.col-md-offset-4.set img {
    width: 85px;
    left: 0px !important;
    margin-right: 10px;
  }
}

.perposal-box {
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
}

.perposal-text {
  background: #fff;
  padding: 15px;
}

.text-left h3 {
  font-size: 0.875rem;
}

.perposal-text {
  font-size: 0.875rem;
}

.perposal-text h4 {
  font-size: 0.875rem;
  font-weight: 600;
}
.text-pp {
  position: relative;
}

.perposal-name {
  position: absolute;
  z-index: 1;
  bottom: 15px;
  left: 15px;
  font-size: 30px;
  color: #fff;
}
.sizebox {
  font-size: 24px;
}

.prosoal-pricebox .card-header {
  background: #ded9d3;
  padding: 0px 10px;
  overflow: hidden;
}

.prosoal-pricebox .card-header a {
  display: block;
  border-radius: 0px;
  font-size: 24px;
  font-weight: bold;
  text-transform: capitalize;
  padding: 15px;
  text-align: center;
  color: #000;
}

.prosoal-pricebox .card-header li {
  width: 50%;
  background: #b0bec5;
}

.prosoal-pricebox .card-header ul {
  border: 0px;
}

.prosoal-pricebox .card-header li a {
  background: #b0bec5;
}

.prosoal-pricebox .card-header li a.active {
  background: #a8b5bc;
}

.persoal-cc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}

.persoal-cc h2 {
  margin: 0px;
  font-weight: 600;
}
.sliderbanner #carousel-1 {
  margin: 0px;
}

.sliderbanner h4 {
  margin: 15px 0px;
  font-size: 14px;
}

.porsoal-new1 {
  text-align: center;
  font-size: 18px;
  margin-top: 2em;
  margin-bottom: 2em;
}
.destailsdd .body-1 {
  padding: 10px;
  font-size: 18px;
}

.destailsdd .headline {
  font-size: 28px;
  margin-top: 15px;
}
.tabsbv ul {
  margin: 0px;
  padding: 15px;
  background: #eeece9;
}

.tabsbv ul li {
  list-style: none;
  width: 50%;
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 8px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
}
.tabsbv ul li.active {
  background: #bdaa94;
  color: #fff;
}
.des-tile h2 {
  font-weight: 600;
  font-size: 18px;
}

.fv {
  font-size: 24px;
  font-weight: bold;
  color: #2fa34b;
}

span.suboo {
  text-decoration: line-through;
  font-size: 15px;
}
.detailsv {
  outline: none;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  font-weight: bold;
}
.border-box {
  border-bottom: 1px solid #ccc;
}
h2.exrea-service {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}

h2.exrea-service span {
  font-size: 24px;
  font-weight: bold;
  color: #2fa34b;
}
.font-32 {
  font-size: 24px;
}
.destailsdd {
  padding: 0px 18px;
}
.border_new {
  border: 10px solid #bdaa94;
}
</style>

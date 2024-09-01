<template>
  <form @submit.prevent="submitForm">
    <fieldset v-if="currentStep === 1">
      <legend>
        Etapa {{ currentStep }} de {{ totalSteps }}
      </legend>

      <div>
        <label for="userEmail">Endereço de e-mail</label>
        <input type="text" id="userEmail" name="userEmail"v-model="userEmail">
      </div>

      <div>
        <label for="individual">
          <input type="radio" id="individual" name="userType" value="pf" v-model="userType">
            Pessoa Física
        </label>

        <label for="juridicalPerson">
          <input type="radio" id="juridicalPerson" name="userType" value="pj" v-model="userType">
            Pessoa Jurídica
        </label>
      </div>
      
      <div>
        <button type="button" @click="goToNextStep()">Continuar</button>
      </div>

    </fieldset>

    <fieldset v-if="currentStep === 2">

      <legend>
        Etapa {{ currentStep }} de {{ totalSteps }}
      </legend>

      <div v-if="userType === 'pf'">
        <p>Pessoa Física</p>
        <div>
          <label for="userName">Nome</label>
          <input type="text" id="userName" name="userName"v-model="userInfo.userName">
        </div>

        <div>
          <label for="userCpf">CPF</label>
          <input type="text" id="userCpf" name="userCpf"v-model="userInfo.userCpf">
        </div>

        <div>
          <label for="userBirthday">Data de Nascimento</label>
          <input type="text" id="userBirthday" name="userBirthday"v-model="userInfo.userBirthday">
        </div>

        <div>
          <label for="userPhoneNumber">Telefone</label>
          <input type="text" id="userPhoneNumber" name="userPhoneNumber"v-model="userInfo.userPhoneNumber">
        </div>
      </div>

      <div v-if="userType === 'pj'">
        <p>Pessoa Jurídica</p>
        <div>
          <label for="companyName">Razão Social</label>
          <input type="text" id="companyName" name="companyName"v-model="userInfo.companyName">
        </div>

        <div>
          <label for="companyRegistryNumber">CNPJ</label>
          <input type="text" id="companyRegistryNumber" name="companyRegistryNumber"v-model="userInfo.companyRegistryNumber">
        </div>

        <div>
          <label for="companyOpeningDate">Data de abertura</label>
          <input type="text" id="companyOpeningDate" name="companyOpeningDate"v-model="userInfo.companyOpeningDate">
        </div>

        <div>
          <label for="companyPhoneNumber">Telefone</label>
          <input type="text" id="companyPhoneNumber" name="companyPhoneNumber"v-model="userInfo.companyPhoneNumber">
        </div>
      </div>

      <div>
        <button type="button" @click="goToPreviousStep()">Voltar</button>
        <button type="button" @click="goToNextStep()">Continuar</button>
      </div>
    </fieldset>

    <fieldset v-if="currentStep === 3">
        <legend>
          Etapa {{ currentStep }} de {{ totalSteps }}
        </legend>

        <p>Senha de acesso</p>
        <div>
          <label for="userPassword">Sua senha</label>
          <input type="text" id="userPassword" name="userPassword"v-model="userPassword">
        </div>
        <div>
          <button type="button" @click="goToPreviousStep()">Voltar</button>
          <button type="button" @click="goToNextStep()">Continuar</button>
        </div>
    </fieldset>

    
    <fieldset v-if="currentStep === 4">
        <legend>
          Etapa {{ currentStep }} de {{ totalSteps }}
        </legend>
        <p>Revise suas informações</p>


        <div>
          <label for="userEmail">Endereço de e-mail</label>
          <input type="text" id="userEmail" name="userEmail"v-model="userEmail">
        </div>

        <div v-if="userType === 'pf'">
          <p>Pessoa Física</p>
          <div>
            <label for="userName">Nome</label>
            <input type="text" id="userName" name="userName"v-model="userInfo.userName">
          </div>

          <div>
            <label for="userCpf">CPF</label>
            <input type="text" id="userCpf" name="userCpf"v-model="userInfo.userCpf">
          </div>

          <div>
            <label for="userBirthday">Data de Nascimento</label>
            <input type="text" id="userBirthday" name="userBirthday"v-model="userInfo.userBirthday">
          </div>

          <div>
            <label for="userPhoneNumber">Telefone</label>
            <input type="text" id="userPhoneNumber" name="userPhoneNumber"v-model="userInfo.userPhoneNumber">
          </div>
        </div>

        <div  v-if="userType === 'pj'">
          <p>Pessoa Jurídica</p>
          <div>
            <label for="companyName">Razão Social</label>
            <input type="text" id="companyName" name="companyName"v-model="userInfo.companyName">
          </div>

          <div>
            <label for="companyRegistryNumber">CNPJ</label>
            <input type="text" id="companyRegistryNumber" name="companyRegistryNumber"v-model="userInfo.companyRegistryNumber">
          </div>

          <div>
            <label for="companyOpeningDate">Data de abertura</label>
            <input type="text" id="companyOpeningDate" name="companyOpeningDate"v-model="userInfo.companyOpeningDate">
          </div>

          <div>
            <label for="companyPhoneNumber">Telefone</label>
            <input type="text" id="companyPhoneNumber" name="companyPhoneNumber"v-model="userInfo.companyPhoneNumber">
          </div>
        </div>

        <div>
          <label for="userPassword">Sua senha</label>
          <input type="text" id="userPassword" name="userPassword" v-model="userPassword">
        </div>
        <div>
          <button type="button" @click="goToPreviousStep()">Voltar</button>
          <button type="submit">Cadastrar</button>
        </div>
    </fieldset>


</form>

</template>

<script setup>
import { ref } from 'vue';

const currentStep = ref(1);
const totalSteps = ref(4);

const userEmail = ref('');
const userType = ref('');

const userPassword = ref('');

const userInfo = ref({
  userName: '',
  userCpf: '',
  userBirthday: '',
  userPhoneNumber: '',

  companyName: '',
  companyRegistryNumber: '',
  companyOpeningDate: '',
  companyPhoneNumber: ''
})

const goToNextStep = () => {
  if(currentStep.value <= totalSteps.value) {
    currentStep.value ++;
  }
}

const goToPreviousStep = () => {
  if(currentStep.value <= totalSteps.value) {
    currentStep.value --;
  }
}



const submitForm = ()=> {
  alert("Formulário enviado")
}

</script> 
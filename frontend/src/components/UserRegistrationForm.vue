<template>
  <div class="main-wrapper">
    <form @submit.prevent="handleSubmitForm" class="form">
      <fieldset v-if="currentStep === 1" class="form-group">
        <UserRegistrationStep :step="currentStep" :total="totalSteps" />
        <UserRegistrationStepTitle title="Boas Vindas!" />

        <div class="form-group__fields-wrapper">
          <div class="form-field__group">
            <label class="form-field__label" for="userEmail" >Endereço de e-mail</label>
            <input class="form-field__field" type="email" @keydown.enter.prevent id="userEmail" name="userEmail" v-model="step1.email" @blur="validateField('email', step1.email);">
            <div class="form-field__error" v-if="errors.email">{{ errors.email }}</div>
          </div>

          <div class="form-field__group form-field__group--inline">
            <div class="form-field__fields-wrapper">
              <label class="form-field__label" for="individual">
                <input  class="form-field__field" type="radio" id="individual" name="userType" value="pf" v-model="step1.type" @change="validateField('type', step1.type);">
                  Pessoa Física
              </label>
              <label class="form-field__label" for="juridicalPerson">
                <input  class="form-field__field" type="radio" id="juridicalPerson" name="userType" value="pj" v-model="step1.type" @change="validateField('type', step1.type);">
                  Pessoa Jurídica
              </label>
            </div>
            <div class="form-field__error" v-if="errors.type">{{ errors.type }}</div>
          </div>          
        </div>

        <div class="form-group__actions">          
          <ButtonBase @click="goToNextStep()">Continuar</ButtonBase>
        </div>
      </fieldset>

      <fieldset v-if="currentStep === 2" class="form-group">

        <UserRegistrationStep :step="currentStep" :total="totalSteps" />

        <div v-if="step1.type === 'pf'">
          <UserRegistrationStepTitle title="Pessoa Física" />

          <div class="form-group__fields-wrapper">
            <div class="form-field__group">
              <label class="form-field__label" for="userName">Nome</label>
              <input class="form-field__field" type="text" @keydown.enter.prevent id="userName" name="userName" v-model="step2.name" @blur="validateField('name', step2.name)">
              <div class="form-field__error" v-if="errors.name">{{ errors.name }}</div>
            </div>

            <div class="form-field__group">
              <label class="form-field__label" for="userCpf">CPF</label>
              <input class="form-field__field" type="text" @keydown.enter.prevent id="userCpf" name="userCpf" v-model="step2.cpf"  @blur="validateField('cpf', step2.cpf)">
              <div class="form-field__error" v-if="errors.cpf">{{ errors.cpf }}</div>
            </div>

            <div class="form-field__group">
              <label class="form-field__label" for="userBirthDate">Data de Nascimento</label>
              <input class="form-field__field" type="date" id="userBirthDate" name="userBirthDate" v-model="step2.birthDate"  @blur="validateField('birthDate', step2.birthDate)">
              <div class="form-field__error" v-if="errors.birthDate">{{ errors.birthDate }}</div>
            </div>

            <div class="form-field__group">
              <label class="form-field__label" for="userPhoneNumber">Telefone</label>
              <input class="form-field__field" type="text" @keydown.enter.prevent id="userPhoneNumber" name="userPhoneNumber" v-model="step2.phone"   @blur="validateField('phone', step2.phone)">
              <div class="form-field__error" v-if="errors.phone">{{ errors.phone }}</div>
            </div>
          </div>
        </div>

        <div v-if="step1.type === 'pj'">
          <UserRegistrationStepTitle title="Pessoa Jurídica" />
          <div class="form-group__fields-wrapper">
            <div class="form-field__group">
              <label class="form-field__label" for="companyName">Razão Social</label>
              <input class="form-field__field" type="text" @keydown.enter.prevent id="companyName" name="companyName"v-model="step2.companyName"   @blur="validateField('name', step2.companyName)">
              <div class="form-field__error" v-if="errors.companyName">{{ errors.companyName }}</div>
            </div>

            <div class="form-field__group">
              <label class="form-field__label" for="companyRegistryNumber">CNPJ</label>
              <input class="form-field__field" type="text" @keydown.enter.prevent id="companyRegistryNumber" name="companyRegistryNumber"v-model="step2.cnpj"   @blur="validateField('cnpj', step2.cnpj)">
              <div class="form-field__error" v-if="errors.cnpj">{{ errors.cnpj }}</div>
            </div>

            <div class="form-field__group">
              <label class="form-field__label" for="companyOpeningDate">Data de abertura</label>
              <input class="form-field__field" type="date" id="companyOpeningDate" name="companyOpeningDate"v-model="step2.openingDate"   @blur="validateField('openingDate', step2.openingDate )">
              <div class="form-field__error" v-if="errors.openingDate">{{ errors.openingDate }}</div>
            </div>

            <div class="form-field__group">
              <label class="form-field__label" for="companyPhoneNumber">Telefone</label>
              <input class="form-field__field" type="text" @keydown.enter.prevent id="companyPhoneNumber" name="companyPhoneNumber"v-model="step2.phone"  @blur="validateField('phone', step2.phone)">
              <div class="form-field__error" v-if="errors.phone">{{ errors.phone }}</div>
            </div>
          </div>
        </div>
  
        <div class="form-group__actions">
          <ButtonBase variant="outlined" @click="goToPreviousStep()">Voltar</ButtonBase>
          <ButtonBase @click="goToNextStep()">Continuar</ButtonBase>
        </div>
      </fieldset>

      <fieldset v-if="currentStep === 3" class="form-group">
      
          <UserRegistrationStep :step="currentStep" :total="totalSteps" />
          <UserRegistrationStepTitle title="Senha de Acesso" />

          <div class="form-field__group">
            <label class="form-field__label" for="userPassword">Sua senha</label>
            <input class="form-field__field" type="password" @keydown.enter.prevent id="userPassword" name="userPassword" v-model="step3.password" @blur="validateField('password', step3.password)">
            <div class="form-field__error" v-if="errors.password">{{ errors.password }}</div>
          </div>
          <div class="form-group__actions">
            <ButtonBase variant="outlined" @click="goToPreviousStep()">Voltar</ButtonBase>
            <ButtonBase @click="goToNextStep()">Continuar</ButtonBase>
          </div>
      </fieldset>

      
      <fieldset v-if="currentStep === 4" class="form-group">
  
          <UserRegistrationStep :step="currentStep" :total="totalSteps" />
          <UserRegistrationStepTitle title="Revise suas informações" />

          <div class="form-group__fields-wrapper">

            <div class="form-field__group">
              <label class="form-field__label" for="userEmail">Endereço de e-mail</label>
              <input class="form-field__field" type="text" @keydown.enter.prevent id="userEmail" name="userEmail" v-model="step1.email" @blur="validateField('email', step1.email)">
              <div class="form-field__error" v-if="errors.email">{{ errors.email }}</div>
            </div>

            <template v-if="step1.type === 'pf'">
              <div class="form-field__group">
                <label class="form-field__label" for="userName">Nome</label>
                <input class="form-field__field" type="text" @keydown.enter.prevent id="userName" name="userName" v-model="step2.name" @blur="validateField('name', step2.name)">
                <div class="form-field__error" v-if="errors.name">{{ errors.name }}</div>
              </div>

              <div class="form-field__group">
                <label class="form-field__label" for="userCpf">CPF</label>
                <input class="form-field__field" type="text" @keydown.enter.prevent id="userCpf" name="userCpf" v-model="step2.cpf"  @blur="validateField('cpf', step2.cpf)">
                <div class="form-field__error" v-if="errors.cpf">{{ errors.cpf }}</div>
              </div>

              <div class="form-field__group">
                <label class="form-field__label" for="userBirthDate">Data de Nascimento</label>
                <input class="form-field__field" type="text" @keydown.enter.prevent id="userBirthDate" name="userBirthDate" v-model="step2.birthDate"  @blur="validateField('birthDate', step2.birthDate)">
                <div class="form-field__error" v-if="errors.birthDate">{{ errors.birthDate }}</div>
              </div>

              <div class="form-field__group">
                <label class="form-field__label" for="userPhoneNumber">Telefone</label>
                <input class="form-field__field" type="text" @keydown.enter.prevent id="userPhoneNumber" name="userPhoneNumber" v-model="step2.phone"  @blur="validateField('phone', step2.phone)">
                <div class="form-field__error" v-if="errors.phone">{{ errors.phone }}</div>
              </div>
            </template>

            <template  v-if="step1.type === 'pj'">
              <div class="form-field__group">
                <label class="form-field__label" for="companyName">Razão Social</label>
                <input class="form-field__field" type="text" @keydown.enter.prevent id="companyName" name="companyName" v-model="step2.companyName"  @blur="validateField('companyName', step2.companyName)">
                <div class="form-field__error" v-if="errors.companyName">{{ errors.companyName }}</div>
              </div>

              <div class="form-field__group">
                <label class="form-field__label" for="companyRegistryNumber">CNPJ</label>
                <input class="form-field__field" type="text" @keydown.enter.prevent id="companyRegistryNumber" name="companyRegistryNumber" v-model="step2.cnpj"  @blur="validateField('cnpj', step2.cnpj)">
                <div class="form-field__error" v-if="errors.cnpj">{{ errors.cnpj }}</div>
              </div>

              <div class="form-field__group">
                <label class="form-field__label" for="companyOpeningDate">Data de abertura</label>
                <input class="form-field__field" type="text" @keydown.enter.prevent id="companyOpeningDate" name="companyOpeningDate" v-model="step2.openingDate"  @blur="validateField('openingDate', step2.openingDate)">
                <div class="form-field__error" v-if="errors.openingDate">{{ errors.openingDate }}</div>
              </div>

              <div class="form-field__group">
                <label class="form-field__label" for="companyPhoneNumber">Telefone</label>
                <input class="form-field__field" type="text" @keydown.enter.prevent id="companyPhoneNumber" name="companyPhoneNumber" v-model="step2.phone"   @blur="validateField('phone', step2.phone)">
                <div class="form-field__error" v-if="errors.phone">{{ errors.phone }}</div>
              </div>
            </template>

            <div class="form-field__group">
              <label class="form-field__label" for="userPassword">Sua senha</label>
              <input class="form-field__field" type="password" @keydown.enter.prevent id="userPassword" name="userPassword" v-model="step3.password"   @blur="validateField('password', step3.password)">
              <div class="form-field__error" v-if="errors.password">{{ errors.password }}</div>
            </div>

          </div>
    
          <div class="form-group__actions">
            <ButtonBase variant="outlined" @click="goToPreviousStep()">Voltar</ButtonBase>
            <ButtonBase buttonType="submit">Cadastrar</ButtonBase>
          </div>
      </fieldset>
    </form>

    <UserRegistrationFeedback v-if="feedback.message" :title="feedback.message" :data="feedback.data" />

</div>

</template>

<script setup>
import { provide, ref } from 'vue';
import { useValidation } from "../composables/useValidations";
import ButtonBase from './ButtonBase.vue';
import UserRegistrationFeedback from './UserRegistrationFeedback.vue';
import UserRegistrationStep from './UserRegistrationStep.vue';
import UserRegistrationStepTitle from './UserRegistrationStepTitle.vue';

const {errors, validateField, validateAllFields} = useValidation();

const currentStep = ref(1);
const totalSteps = ref(4);

const feedbackInitialValue = {
  message: '',
  data: ''
}

const feedback = ref({...feedbackInitialValue})

const step1InitialValue = {
  email: '',
  type: ''
}

const step2InitialValue = {
  name: '',
  cpf: '',
  birthDate: '',
  phone: '',
  companyName: '',
  cnpj: '',
  openingDate: ''
}

const step3InitialValue = {
  password: ''
}

const step1 = ref({...step1InitialValue})
const step2 = ref({...step2InitialValue})
const step3 = ref({...step3InitialValue})

const goToNextStep = () => {
  const actualStep = validateStep(currentStep.value);

  if(actualStep.isValid) {
    currentStep.value +=1;
  } 
}

const goToPreviousStep = () => {  
  currentStep.value --;
}

const validateStep = (step) => {
  const steps = {
    1: validateStep1,
    2: validateStep2,
    3: validateStep3,
  }

  return steps[step]()
}


const validateStep1 = () => {
  const fieldsToValidate = [
    {field: 'email', value: step1.value.email},
    {field: 'type', value: step1.value.type},
  ]
  const isValid = validateAllFields(fieldsToValidate)

  return {
    isValid,
    fieldsToValidate
  }
}

const validateStep2 = () => {

  const fieldsToValidate = []

  if(step1.value.type === 'pf') {
      fieldsToValidate.push(
        {field: 'name', value: step2.value.name},
        {field: 'cpf', value: step2.value.cpf},
        {field: 'birthDate', value: step2.value.birthDate},
        {field: 'phone', value: step2.value.phone}
      )
  }

  if(step1.value.type === 'pj') {
    fieldsToValidate.push(
      {field: 'companyName', value: step2.value.companyName},
      {field: 'cnpj', value: step2.value.cnpj},
      {field: 'openingDate', value: step2.value.openingDate},
      {field: 'phone', value: step2.value.phone}
    )
  }

  const isValid = validateAllFields(fieldsToValidate)

  return {
    isValid,
    fieldsToValidate
  }

}


const validateStep3 = () => {
  const fieldsToValidate = [
    {field: 'password', value: step3.value.password},
  ]
  const isValid = validateAllFields(fieldsToValidate)

  return {
    isValid,
    fieldsToValidate
  }

}



const handleSubmitForm = ()=> {

  const allFields = groupAllFieldsData();
  const isFormValid = validateAllFields(allFields);

  if(isFormValid) {
    submitForm(allFields)
  }   
}

  
const groupAllFieldsData = () => {
  const step1Fields = validateStep1().fieldsToValidate;
  const step2Fields = validateStep2().fieldsToValidate;
  const step3Fields = validateStep3().fieldsToValidate;

  const allFields = step1Fields.concat(step2Fields, step3Fields);

  return allFields;

}

const submitForm = async (allFields) => {
  const submitObject = allFields.reduce((acumulator, fieldItem) => {
    acumulator[fieldItem.field] = fieldItem.value;
    return acumulator
  }, {})
  
  const response = await fetch(`http://localhost:3000"/registration`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(submitObject)
  });

  const result = await response.json();

  if (response.ok) {
    feedback.value.message = result.message;
    feedback.value.data = result.data;    
  } else {
    feedback.value.message = result.message;
  }
  currentStep.value = 0
}

const startRewRegister = () => {
  currentStep.value = 1
  step1.value = {... step1InitialValue}
  step2.value = {... step2InitialValue}
  step3.value = {... step3InitialValue}
  feedback.value = {...feedbackInitialValue} 
}

provide('restartRegister', startRewRegister);


</script> 


<style lang="scss" scoped>

.form-group {
  padding: 0 1.6rem 1.6rem;
  border: none;
  &__fields-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    column-gap: 40px;
  }
  &__actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-block-start: 2rem;
    .button:only-of-type {
      @media (max-width: 800px) {
        width: calc(50% - 20px);
        width: 100%;
      }
    }    
  }
}

.form-field {
  &__group {
    margin-bottom: 2rem;
  }
  &__label {
    display: block;
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
  }
  &__field {
    font-size: 1.6rem;
    padding-block: 1.2rem;
    padding-inline: 0.8rem;
    border-radius: 0.4rem;
    border: solid 1px var(--fields-border-color);
    width: 100%;
  }
  &__fields-wrapper {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }
  &__error {
    font-size: 1.4rem;
    color: var(--error-color);
    margin-top: 0.4rem;
  }
}

.form-field__group--inline {
  align-content: center;
  margin-bottom: 0;
  .form-field__label {
    display: inline;
  }
  .form-field__field {
    width: auto;
  }
}



</style>
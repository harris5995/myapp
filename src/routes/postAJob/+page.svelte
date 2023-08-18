<!-- This file contains the webpage for 'Create New Job Post' -->

<script>
    import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
    let formErrors = {};
    import { getUserId } from '../../lib/auth';
    import { goto } from '$app/navigation'
    //import userid, then variable

    function postSignUp() {
      goto('/');
    }

    async function createJobs(evt) {
        const id = getUserId()

        evt.preventDefault()

        if (evt.target['title'].value == '' || evt.target['minAnnualCompensation'].value == '' || evt.target['maxAnnualCompensation'].value == ''
        || evt.target['employer'].value == '' || evt.target['location'].value == '' || evt.target['description'].value == '' || evt.target['requirements'].value == ''
        || evt.target['applicationInstructions'].value == '')
        {
            formErrors['title'] = { message: 'Please do not leave field empty' };
            formErrors['minAnnualCompensation'] = { message: 'Please do not leave field empty' };
            formErrors['maxAnnualCompensation'] = { message: 'Please do not leave field empty' };
            formErrors['employer'] = { message: 'Please do not leave field empty' };
            formErrors['location'] = { message: 'Please do not leave field empty' };
            formErrors['description'] = { message: 'Please do not leave field empty' };
            formErrors['requirements'] = { message: 'Please do not leave field empty' };
            formErrors['applicationInstructions'] = { message: 'Please do not leave field empty' };
            return;
        }

        
        // if (evt.target['maxAnnualCompensation'].value == '' )
        // {
        //     formErrors['maxAnnualCompensation'] = { message: 'Please do not leave field empty' };
        //     return;
        // }

        // if (evt.target['employer'].value == '' )
        // {
        //     formErrors['employer'] = { message: 'Please do not leave field empty' };
        //     return;
        // }

        // if (evt.target['location'].value == '' )
        // {
        //     formErrors['location'] = { message: 'Please do not leave field empty' };
        //     return;
        // }

        // if (evt.target['description'].value == '' )
        // {
        //     formErrors['description'] = { message: 'Please do not leave field empty' };
        //     return;
        // }

        // if (evt.target['requirements'].value == '' )
        // {
        //     formErrors['requirements'] = { message: 'Please do not leave field empty' };
        //     return;
        // }

        // if (evt.target['applicationInstructions'].value == '' )
        // {
        //     formErrors['applicationInstructions'] = { message: 'Please do not leave field empty' };
        //     return;
        // }



        const userData = {
            user: id,
            title: evt.target['title'].value,
            minAnnualCompensation: evt.target['minAnnualCompensation'].value,
            maxAnnualCompensation: evt.target['maxAnnualCompensation'].value,
            employer: evt.target['employer'].value,
            location: evt.target['location'].value,
            description: evt.target['description'].value,
            requirements: evt.target['requirements'].value,
            applicationInstructions: evt.target['applicationInstructions'].value  
        };

        const resp = await fetch(PUBLIC_BACKEND_BASE_URL + '/api/collections/jobs/records', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
  
      if (resp.status == 200) {
         postSignUp();
        } else {
        const res = await resp.json();
        formErrors = res.data;
      }
}
</script>

<h1 class="text-center text-3xl mt-20 font-bold">Post A Job</h1>

<h1 class="text-center text-xl mt-5 font-semibold">Create New Job Posting</h1>

  <div class="flex justify-center items-center mt-8">
      <form on:submit={createJobs} class="w-1/3">
          <div class="form-control w-full">
              <label class="label" for="title">
                  <span class="label-text">Job Title</span>
              </label>
              <input type="text" name="title" placeholder="Software Engineer" class="input input-bordered w-full" />
              {#if 'title' in formErrors}
              <label class="label" for="title">
                  <span class="label-text-alt text-red-500">{formErrors['title'].message}</span>
              </label>
              {/if}
          </div>
  
          <div class="form-control w-full">
              <label class="label" for="minAnnualCompensation">
                  <span class="label-text">Minimum Monthly Compensation</span>
              </label>
              <input type="minAnnualCompensation" name="minAnnualCompensation" placeholder="RM 1000" class="input input-bordered w-full" required />
              {#if 'minAnnualCompensation' in formErrors}
              <label class="label" for="minAnnualCompensation">
                  <span class="label-text-alt text-red-500">{formErrors['minAnnualCompensation'].message}</span>
              </label>
              {/if}
          </div>
  
          <div class="form-control w-full">
              <label class="label" for="maxAnnualCompensation">
                  <span class="label-text">Maximum Monthly Compensation</span>
              </label>
              <input type="maxAnnualCompensation" name="maxAnnualCompensation" placeholder="RM 1000" class="input input-bordered w-full" required />
              {#if 'maxAnnualCompensation' in formErrors}
              <label class="label" for="maxAnnualCompensation">
                  <span class="label-text-alt text-red-500">{formErrors['maxAnnualCompensation'].message}</span>
              </label>
              {/if}
          </div>
  
          <div class="form-control w-full">
              <label class="label" for="employer">
                  <span class="label-text">Company Name</span>
              </label>
              <input type="employer" name="employer" placeholder="" class="input input-bordered w-full" required />
              {#if 'employer' in formErrors}
              <label class="label" for="employer">
                  <span class="label-text-alt text-red-500">{formErrors['employer'].message}</span>
              </label>
              {/if}
          </div>

          <div class="form-control w-full">
            <label class="label" for="location">
                <span class="label-text">Job Location</span>
            </label>
            <input type="location" name="location" placeholder="Kuala Lumpur" class="input input-bordered w-full" required />
            {#if 'location' in formErrors}
            <label class="label" for="location">
                <span class="label-text-alt text-red-500">{formErrors['location'].message}</span>
            </label>
            {/if}
        </div>

        <div class="form-control w-full">
            <label class="label" for="description">
                <span class="label-text">Description</span>
            </label>
            <textarea type="description" name="description" class="input input-bordered w-full h-[150px]" required />
            {#if 'description' in formErrors}
            <label class="label" for="description">
                <span class="label-text-alt text-red-500">{formErrors['description'].message}</span>
            </label>
            {/if}
        </div>

        <div class="form-control w-full">
            <label class="label" for="requirements">
                <span class="label-text">Requirements</span>
            </label>
            <textarea type="requirements" name="requirements" placeholder="Need own transport" class="input input-bordered w-full h-[120px]" required />
            {#if 'requirements' in formErrors}
            <label class="label" for="requirements">
                <span class="label-text-alt text-red-500">{formErrors['requirements'].message}</span>
            </label>
            {/if}
        </div>

        <div class="form-control w-full">
            <label class="label" for="applicationInstructions">
                <span class="label-text">Application Instructions</span>
            </label>
            <textarea type="applicationInstructions" name="applicationInstructions" class="input input-bordered w-full h-[250px]" required />
            {#if 'applicationInstructions' in formErrors}
            <label class="label" for="applicationInstructions">
                <span class="label-text-alt text-red-500">{formErrors['applicationInstructions'].message}</span>
            </label>
            {/if}
        </div>
  
          <div class="form-control w-full mt-4">
              <button class="btn btn-md">Submit Job Post</button>
          </div>
      </form>
  </div>



<script>
     import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
    export let data;
    import { getUserId, isLoggedIn,LoggedIn } from '../../../../lib/auth.js';
    import {goto} from '$app/navigation';
    let formErrors = {};

function postUpdate() {
    goto('/');
  }

  async function updateJobs(evt) {
      const id = getUserId()

      evt.preventDefault()

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

      const resp = await fetch(PUBLIC_BACKEND_BASE_URL + `/api/collections/jobs/records/${data.job.id}`, {
      method: 'PATCH',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });

    if (resp.status == 200) {
        postUpdate();
      } else {
      const res = await resp.json();
      formErrors = res.data;
    }
}
</script>



<h1 class="text-center text-xl mt-5 font-semibold">Update Job Posting</h1>

<div class="flex justify-center items-center mt-8">
    <form on:submit={updateJobs} class="w-1/3">
        <div class="form-control w-full">
            <label class="label" for="title">
                <span class="label-text">Job Title</span>
            </label>
            <input type="text" name="title" value={data.job.title} class="input input-bordered w-full" required />
            {#if 'title' in formErrors}
            <label class="label" for="title">
                <span class="label-text-alt text-red-500">{formErrors['title'].message}</span>
            </label>
            {/if}
        </div>

        <div>{data.job.title}</div>
 

        <div class="form-control w-full">
            <label class="label" for="minAnnualCompensation">
                <span class="label-text">Minimum Monthly Compensation</span>
            </label>
            <input type="minAnnualCompensation" name="minAnnualCompensation" value={data.job.minAnnualCompensation} class="input input-bordered w-full" required  />
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
            <input type="maxAnnualCompensation" name="maxAnnualCompensation" value={data.job.maxAnnualCompensation} class="input input-bordered w-full" required />
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
            <input type="employer" name="employer" value={data.job.employer} class="input input-bordered w-full" required />
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
          <input type="location" name="location" value={data.job.location} class="input input-bordered w-full" required />
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
          <textarea type="description" name="description" value={data.job.description} class="input input-bordered w-full h-[150px]" required />
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
          <textarea type="requirements" name="requirements" value={data.job.requirements} class="input input-bordered w-full h-[120px]" required />
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
          <textarea type="applicationInstructions" name="applicationInstructions" value={data.job.applicationInstructions} class="input input-bordered w-full h-[250px]" required />
          {#if 'applicationInstructions' in formErrors}
          <label class="label" for="applicationInstructions">
              <span class="label-text-alt text-red-500">{formErrors['applicationInstructions'].message}</span>
          </label>
          {/if}
      </div>

        <div class="form-control w-full mt-4">
            <button class="btn btn-md">Update Job Post</button>
        </div>
    </form>
</div>




<!-- Use 'getUserId' function and 'getTokenFromLocalStorage = True', if true, then reveal 'Edit Form' button -->
<!-- After clicking the 'Edit Form' button, the job details is pre-loaded -->
<!-- Allow users to edit the data. Once job details is updated, users have to click a 'Submit' button -->
<!-- After 'Submit button is clicked, users are redirected back to the job page with updated job details-->
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      API_TOKEN:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwidW5pcXVlX25hbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5Ac2l0ZS5jb20iLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6Iko0VFFOUUI2N01KT0hDSVg0QTczUFkzWEFXMlJNNkcyIiwiSXNMZWdhbCI6IkZhbHNlIiwicm9sZSI6ImFkbWluIiwiRHluYW1pY1Blcm1pc3Npb24iOlsiOnVzZXJtYW5hZ2VtZW50OnVzZXJzaW5yb2xlOmdldCIsIjp1c2VybWFuYWdlbWVudDpjdXJyZW50dXNlcnM6Z2V0IiwiOnVzZXJtYW5hZ2VtZW50OmV4cG9ydF91c2VyczpnZXQiLCI6dXNlcm1hbmFnZW1lbnQ6cm9sZXM6Z2V0IiwiOnVzZXJtYW5hZ2VtZW50OnBlcm1pc3Npb25zOmdldCIsIjp1c2VybWFuYWdlbWVudDp1cGRhdGVyb2xlcGVybWlzc2lvbnM6cHV0IiwiOnVzZXJtYW5hZ2VtZW50Om5ld3JvbGU6cG9zdCIsIjp1c2VybWFuYWdlbWVudDp1cGRhdGV1c2Vycm9sZXM6cG9zdCIsIjp1c2VybWFuYWdlbWVudDpnZXRyb2xlc29mdXNlcjpnZXQiLCI6dXNlcm1hbmFnZW1lbnQ6ZGVsZXRlcm9sZWJ5aWQ6ZGVsZXRlIiwiOnVzZXJtYW5hZ2VtZW50OmdldHJvbGVieWlkOmdldCIsIjpyZXF1ZXN0cmVwb3J0OmJyb2tlcnJlcXVlc3RyZXBvcnRzOmdldCIsIjpyZXF1ZXN0cmVwb3J0OmJyb2tlcnJlcXVlc3RyZXBvcnRleGNlbGV4cG9ydDpnZXQiLCI6cmVxdWVzdHJlcG9ydDppbnN0aXR1dGVyZXF1ZXN0cmVwb3J0ZXhjZWxleHBvcnQ6Z2V0IiwiOnJlcXVlc3RyZXBvcnQ6ZnVuZGFwcHJvdmFscmVxdWVzdHJlcG9ydGV4Y2VsZXhwb3J0OmdldCIsIjpsZWdhbHByb2ZpbGU6bGVnYWxwZXJzb246Z2V0IiwiOnJlYWxwcm9maWxlOnJlYWxwZXJzb246Z2V0IiwiOnJlYWxwcm9maWxlOnBlcnNvbmluZm86Z2V0IiwiOnJlYWxwcm9maWxlOnByb2ZpbGU6Z2V0IiwiOmJwbW5mbG93OnRhc2tfbGlzdDpnZXQiLCI6YnBtbmZsb3c6dGFza19saXN0X2FyY2hpdmU6Z2V0IiwiOmJwbW5mbG93OmdldF90YXNrX2hpc3Rvcnk6Z2V0IiwiOmJwbW5mbG93OnJlZmVycmFsOnBvc3QiLCI6aW5zdGFuY2VtYW5hZ2VyOmdldF9hbGw6Z2V0IiwiOmluc3RhbmNlbWFuYWdlcjp1cGRhdGU6cHV0IiwiOmxlZ2FscHJvZmlsZTpnZXRwcm9maWxlOmdldCIsInByb2Nlc3NtYW5hZ2VyZ3JvdXA6cHJvY2Vzc21hbmFnZXI6Ojpncm91cCIsIjpicG1uZmxvdzpzbXNfc3lzdGVtX3Rhc2s6cG9zdCIsIjpicG1uZmxvdzpyZWZlcnJhbGN1c3RvbTpwb3N0IiwiOmZpbGVtYW5hZ2VyOm9yZzpnZXQiLCI6ZXN0YWJsaXNobWVudHJlcXVlc3Q6b3JnZXN0YWJsaXNobWVudDpnZXQiLCI6c2FtaW5mbG93OnJlcXVlc3Rjb25jbHVzaW9uOnBvc3QiLCI6c2FtaW5mbG93OmRpc2FwcHJvdmU6cG9zdCIsIjpzYW1pbmZsb3c6Z2V0cmVxdWVzdGhpc3RvcnlsaXN0OmdldCIsIjpzYW1pbmZsb3c6Z2V0cmVxdWVzdGhpc3Rvcnk6Z2V0IiwiOnJlcXVlc3RyZXBvcnQ6aG9sZGluZ3JlcXVlc3RyZXBvcnRleGNlbGV4cG9ydDpnZXQiLCI6cmVxdWVzdHJlcG9ydDpnZXRmbG93cmVxdWVzdHN0YXR1czpnZXQiLCI6cmVxdWVzdHJlcG9ydDpzdW1tYXJ5cmVwb3J0OmdldCIsIjpyZXF1ZXN0cmVwb3J0OmhvbGRpbmdyZXF1ZXN0cmVwb3J0czpnZXQiLCI6cmVxdWVzdHJlcG9ydDppbnN0aXR1dGVyZXF1ZXN0cmVwb3J0czpnZXQiLCI6cmVxdWVzdHJlcG9ydDpmdW5kYXBwcm92YWxyZXF1ZXN0cmVwb3J0OmdldCIsIjppbnZlc3RtZW50ZnVuZGFwcHJvdmFsOnN1Ym1pdGludmVzdG1lbnRmdW5kcmVxdWVzdDpwb3N0IiwiOmludmVzdG1lbnRmdW5kYXBwcm92YWw6Z2V0YWxscHJvcHM6Z2V0IiwiOmhvbGRpbmdhcHByb3ZhbDpob2xkaW5nOmdldCIsIjpob2xkaW5nYXBwcm92YWw6c3VibWl0OnBvc3QiLCI6ZmluYW5jaWFsaW5zdGl0dXRpb25hcHByb3ZhbDpmaWE6Z2V0IiwiOmZpbmFuY2lhbGluc3RpdHV0aW9uYXBwcm92YWw6c3VibWl0OnBvc3QiLCI6YnJva2VyYWdlYXBwcm92YWw6c3VibWl0OnBvc3QiLCI6YnJva2VyYWdlYXBwcm92YWw6YmFyOmdldCIsIjp1c2VybWFuYWdlbWVudDplbmFibGVhY2NvdW50OnBvc3QiLCI6dXNlcm1hbmFnZW1lbnQ6ZGlzYWJsZWFjY291bnQ6cG9zdCIsIjp1c2VybWFuYWdlbWVudDpjaGVja3NlamFtYWdhaW46cG9zdCIsIjp1c2VybWFuYWdlbWVudDp1c2Vyc2lucm9sZTpnZXQiLCI6dXNlcm1hbmFnZW1lbnQ6Y3VycmVudHVzZXJzOmdldCIsIjp1c2VybWFuYWdlbWVudDpleHBvcnRfdXNlcnM6Z2V0IiwiOnVzZXJtYW5hZ2VtZW50OnJvbGVzOmdldCIsIjp1c2VybWFuYWdlbWVudDpwZXJtaXNzaW9uczpnZXQiLCI6dXNlcm1hbmFnZW1lbnQ6dXBkYXRlcm9sZXBlcm1pc3Npb25zOnB1dCIsIjp1c2VybWFuYWdlbWVudDpjaGVja3NlamFtYWdhaW46cG9zdCIsIjp1c2VybWFuYWdlbWVudDpuZXdyb2xlOnBvc3QiLCI6dXNlcm1hbmFnZW1lbnQ6dXBkYXRldXNlcnJvbGVzOnBvc3QiLCI6dXNlcm1hbmFnZW1lbnQ6Z2V0cm9sZXNvZnVzZXI6Z2V0IiwiOnVzZXJtYW5hZ2VtZW50OmRlbGV0ZXJvbGVieWlkOmRlbGV0ZSIsIjp1c2VybWFuYWdlbWVudDpnZXRyb2xlYnlpZDpnZXQiLCI6dXNlcm1hbmFnZW1lbnQ6ZGlzYWJsZWFjY291bnQ6cG9zdCIsIjp1c2VybWFuYWdlbWVudDplbmFibGVhY2NvdW50OnBvc3QiLCI6YnJva2VyYWdlYXBwcm92YWw6YmFyOmdldCIsIjpicm9rZXJhZ2VhcHByb3ZhbDpzdWJtaXQ6cG9zdCIsIjpmaW5hbmNpYWxpbnN0aXR1dGlvbmFwcHJvdmFsOnN1Ym1pdDpwb3N0IiwiOmZpbmFuY2lhbGluc3RpdHV0aW9uYXBwcm92YWw6ZmlhOmdldCIsIjpob2xkaW5nYXBwcm92YWw6c3VibWl0OnBvc3QiLCI6aG9sZGluZ2FwcHJvdmFsOmhvbGRpbmc6Z2V0IiwiOmludmVzdG1lbnRmdW5kYXBwcm92YWw6Z2V0YWxscHJvcHM6Z2V0IiwiOmludmVzdG1lbnRmdW5kYXBwcm92YWw6c3VibWl0aW52ZXN0bWVudGZ1bmRyZXF1ZXN0OnBvc3QiLCI6cmVxdWVzdHJlcG9ydDpmdW5kYXBwcm92YWxyZXF1ZXN0cmVwb3J0OmdldCIsIjpyZXF1ZXN0cmVwb3J0Omluc3RpdHV0ZXJlcXVlc3RyZXBvcnRzOmdldCIsIjpyZXF1ZXN0cmVwb3J0OmhvbGRpbmdyZXF1ZXN0cmVwb3J0czpnZXQiLCI6cmVxdWVzdHJlcG9ydDpicm9rZXJyZXF1ZXN0cmVwb3J0czpnZXQiLCI6cmVxdWVzdHJlcG9ydDpzdW1tYXJ5cmVwb3J0OmdldCIsIjpyZXF1ZXN0cmVwb3J0OmdldGZsb3dyZXF1ZXN0c3RhdHVzOmdldCIsIjpyZXF1ZXN0cmVwb3J0OmJyb2tlcnJlcXVlc3RyZXBvcnRleGNlbGV4cG9ydDpnZXQiLCI6cmVxdWVzdHJlcG9ydDppbnN0aXR1dGVyZXF1ZXN0cmVwb3J0ZXhjZWxleHBvcnQ6Z2V0IiwiOnJlcXVlc3RyZXBvcnQ6aG9sZGluZ3JlcXVlc3RyZXBvcnRleGNlbGV4cG9ydDpnZXQiLCI6cmVxdWVzdHJlcG9ydDpmdW5kYXBwcm92YWxyZXF1ZXN0cmVwb3J0ZXhjZWxleHBvcnQ6Z2V0IiwiOnNhbWluZmxvdzpnZXRyZXF1ZXN0aGlzdG9yeTpnZXQiLCI6c2FtaW5mbG93OmdldHJlcXVlc3RoaXN0b3J5bGlzdDpnZXQiLCI6c2FtaW5mbG93OmRpc2FwcHJvdmU6cG9zdCIsIjpzYW1pbmZsb3c6cmVxdWVzdGNvbmNsdXNpb246cG9zdCIsIjplc3RhYmxpc2htZW50cmVxdWVzdDpvcmdlc3RhYmxpc2htZW50OmdldCIsIjpsZWdhbHByb2ZpbGU6Z2V0cHJvZmlsZTpnZXQiLCI6bGVnYWxwcm9maWxlOmxlZ2FscGVyc29uOmdldCIsIjpyZWFscHJvZmlsZTpyZWFscGVyc29uOmdldCIsIjpyZWFscHJvZmlsZTpwZXJzb25pbmZvOmdldCIsIjpyZWFscHJvZmlsZTpwcm9maWxlOmdldCIsIjpmaWxlbWFuYWdlcjpvcmc6Z2V0IiwiOmJwbW5mbG93OnRhc2tfbGlzdDpnZXQiLCI6YnBtbmZsb3c6dGFza19saXN0X2FyY2hpdmU6Z2V0IiwiOmJwbW5mbG93OmdldF90YXNrX2hpc3Rvcnk6Z2V0IiwiOmJwbW5mbG93OnJlZmVycmFsOnBvc3QiLCI6YnBtbmZsb3c6cmVmZXJyYWxjdXN0b206cG9zdCIsIjpicG1uZmxvdzpzbXNfc3lzdGVtX3Rhc2s6cG9zdCIsInByb2Nlc3NtYW5hZ2VyZ3JvdXA6cHJvY2Vzc21hbmFnZXI6Ojpncm91cCIsIjppbnN0YW5jZW1hbmFnZXI6Z2V0X2FsbDpnZXQiLCI6aW5zdGFuY2VtYW5hZ2VyOnVwZGF0ZTpwdXQiXSwibmJmIjoxNzMzMDUzOTc3LCJleHAiOjE3MzMwNTc1NzcsImlhdCI6MTczMzA1Mzk3NywiaXNzIjoiU2FtaW5TeXN0ZW0iLCJhdWQiOiJTYW1pbkF1ZGllbmNlIn0.8R-nvDy9JQk2gQA1mIHgY2ipJk5qFcIkgeFrJcadg3E'
    },
  },
});
